import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name) {
      return NextResponse.json(
        { error: "Full Name is required" },
        { status: 400 }
      );
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid Email Address is required" },
        { status: 400 }
      );
    }
    if (!phone) {
      return NextResponse.json(
        { error: "Phone Number is required" },
        { status: 400 }
      );
    }
    if (!subject) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: "Server is not configured for database" },
        { status: 500 }
      );
    }

    await connectToMongo();

    const created = await ContactSubmission.create({
      name,
      email,
      phone,
      company: company ? company : null,
      subject,
      message,
    });

    return NextResponse.json({ ok: true, id: created._id }, { status: 201 });
  } catch (err) {
    // Avoid leaking internal details to the client.
    return NextResponse.json(
      { error: "Server failed to save your message" },
      { status: 500 }
    );
  }
}

