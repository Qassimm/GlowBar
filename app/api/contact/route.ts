import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escapeHtml = (str: string) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: Request) {
  try {
    const { name, phone, email, subject, message, website } = await req.json();

    // Honeypot
    if (website) return NextResponse.json({ ok: true });

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS,
      },
    });

    const cleanName = String(name).replace(/[\r\n]/g, " ").trim();
    const cleanSubject = String(subject || "").replace(/[\r\n]/g, " ").trim();
    const cleanEmail = String(email || "").trim();

    // 1) Aap ko mail (enquiry)
    await transporter.sendMail({
      from: `"GlowBar Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: isValidEmail(cleanEmail) ? cleanEmail : undefined,
      subject: cleanSubject
        ? `New enquiry: ${cleanSubject}`
        : `New enquiry from ${cleanName}`,
      text: `Name: ${cleanName}\nPhone: ${phone}\nEmail: ${cleanEmail || "-"}\nSubject: ${
        cleanSubject || "-"
      }\n\nMessage:\n${message}`,
      html: `
        <h2>New enquiry from GlowBar website</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail || "-")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(cleanSubject || "-")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    // 2) Customer ko auto-reply (sirf agar valid email di ho)
    if (cleanEmail && isValidEmail(cleanEmail)) {
      try {
        await transporter.sendMail({
          from: `"GlowBar" <${process.env.EMAIL_USER}>`,
          to: cleanEmail,
          replyTo: process.env.EMAIL_TO,
          subject: "We received your message | GlowBar",
          text: `Hi ${cleanName},\n\nThank you for contacting GlowBar. We have received your message and our team will get back to you on WhatsApp or a call very soon.\n\nYour message:\n${message}\n\nWarm regards,\nTeam GlowBar`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #333;">
              <h2 style="color: #c8102e;">Thank you, ${escapeHtml(cleanName)}!</h2>
              <p>We have received your message and our team will get back to you on WhatsApp or a call very soon.</p>
              <p style="margin-bottom: 4px;"><strong>Your message:</strong></p>
              <blockquote style="margin: 0; padding: 10px 14px; background: #f6f6f6; border-left: 4px solid #c8102e;">
                ${escapeHtml(message).replace(/\n/g, "<br/>")}
              </blockquote>
              <p style="margin-top: 20px;">Warm regards,<br/><strong>Team GlowBar</strong></p>
            </div>
          `,
        });
      } catch (autoReplyError) {
        // Auto-reply fail ho to bhi form success rahe, kyunke asli enquiry pahunch chuki hai
        console.error("Auto-reply error:", autoReplyError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}