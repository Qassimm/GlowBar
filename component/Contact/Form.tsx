"use client";

import { FormEvent, useState } from "react";
import SideContacts from "../UI/SideContacts";
import axios from "axios";

const labelClass = "text-lg text-primary";
const inputClass =
  "text-xl w-full rounded-lg border border-black/10 bg-black/5 px-3 py-2 text-foreground placeholder:text-black/30 outline-none transition-all duration-200 focus:border-primary focus:bg-white";

const Form = () => {
  const [status, setStatus] = useState<
  "idle" | "loading" | "success" | "error"
>("idle");

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());

  setStatus("loading");

  try {
    await axios.post("/api/contact", data);

    setStatus("success");
    form.reset();
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <section className="py-20 lg:py-24 px-6 flex justify-center items-center bg-pink-200">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row  justify-center gap-8 lg:gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl rounded-[40px] border-2 border-primary/60 bg-primary-foreground/90 p-8 sm:p-10 flex flex-col gap-6"
        >
          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h2 className="font-yester text-3xl sm:text-5xl text-primary">
              Send us a message
            </h2>
            <p className="text-black/60 text-xl">
              Fill in a few details and we&apos;ll get back on WhatsApp or a
              call.
            </p>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Your name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Fatima Shah"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="0312 34567"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@gmail.com"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className={labelClass}>
                Subject (optional)
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g Bridal enquiry"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us your thoughts"
                className={`${inputClass} rounded-2xl resize-none`}
              />
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
          </div>

          {/* Submit */}
          <button
  type="submit"
  disabled={status === "loading"}
  className="w-fit text-xl border-2 border-primary bg-primary hover:bg-transparent py-1 px-5 rounded-full text-primary-foreground hover:text-primary transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed"
>
  {status === "loading" ? "Sending..." : "Send message"}
</button>

{status === "success" && (
  <p className="text-xl text-green-700">
    Thank you! Your message has been sent. We&apos;ll get back to you soon.
  </p>
)}
{status === "error" && (
  <p className="text-xl text-red-600">
    Something went wrong. Please try again or contact us on WhatsApp.
  </p>
)}
        </form>

        <div className="w-full lg:w-80 shrink-0">
          <SideContacts />
        </div>
      </div>
    </section>
  );
};

export default Form;
