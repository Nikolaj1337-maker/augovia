import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  topic?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, company, email, topic, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Where messages go: the CONTACT_EMAIL setting in Vercel if present,
  // otherwise the company email in lib/site.ts (contact@augovia.com).
  const to = process.env.CONTACT_EMAIL || site.company.email;
  // Sender address. Resend's test sender works without setup but only
  // delivers to the email address of your Resend account. Once augovia.com
  // is verified in Resend, set CONTACT_FROM in Vercel, e.g.
  // "Augovia Website <website@augovia.com>".
  const from = process.env.CONTACT_FROM || "Augovia Website <onboarding@resend.dev>";

  // If no email provider is configured, log the submission so it is not
  // silently lost, and let the client show a graceful fallback message.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set. Submission was not emailed:",
      { name, company, email, topic, message }
    );
    return NextResponse.json(
      {
        warning:
          "Email delivery is not configured yet. Set RESEND_API_KEY and CONTACT_EMAIL to enable it.",
      },
      { status: 200 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "Not provided"}`,
        `Email: ${email}`,
        `Topic: ${topic || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }
}
