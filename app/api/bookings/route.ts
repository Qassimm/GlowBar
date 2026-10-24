import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (
      !body.location ||
      !Array.isArray(body.services) ||
      body.services.length === 0 ||
      !body.date ||
      !body.time ||
      !body.customer?.name ||
      !body.customer?.phone
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    await client
      .db("glowbar")
      .collection("bookings")
      .insertOne({ ...body, status: "pending", createdAt: new Date() });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}