import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const subject = email
      ? `New Message from ${name} (${email})`
      : `New Message from ${name}`;

    const response = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: "imprateek08@gmail.com",
      subject,
      text: `Message from ${name}${email ? ` (Email: ${email})` : ""}\n\n${message}`,
    });

    if (response && response.data && response.data.id) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Failed to send email. Response:", response);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
