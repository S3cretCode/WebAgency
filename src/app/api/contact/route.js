import { NextResponse } from "next/server";

/**
 * POST /api/contact
 * 
 * Handles contact form submissions with server-side validation.
 * 
 * Production integration:
 * - See DOCUMENTATION.md for Resend email setup instructions.
 * - Currently logs submissions to the server console.
 * 
 * Rate limiting:
 * - Simple in-memory counter per IP (resets on server restart).
 * - Max 5 submissions per IP per 15-minute window.
 */

/* Simple in-memory rate limiter */
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request) {
  try {
    /* Rate limit check */
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait 15 minutes and try again." },
        { status: 429 }
      );
    }

    /* Parse body */
    const body = await request.json();
    const { name, email, companyUrl, companySize, businessGoal, otherGoal, notes, message } = body;

    /* Validation */
    const errors = [];
    if (!name?.trim()) errors.push("Name is required.");
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid email address is required.");
    }
    if (!companySize?.trim()) errors.push("Company size is required.");
    if (!businessGoal?.trim()) errors.push("Business goal is required.");
    if (businessGoal === "Other" && !otherGoal?.trim()) {
      errors.push("Please specify your business goal.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(" ") },
        { status: 400 }
      );
    }

    /* Determine the displayed business goal */
    const displayGoal = businessGoal === "Other" ? `Other: ${otherGoal}` : businessGoal;

    /* Send email notification via Resend */
    const { Resend } = require("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || "hello@premiumwebservices.co";

    await resend.emails.send({
      from: "Premium WebServices <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `New Inquiry from ${name} — ${companySize}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #F5F0E8; padding: 32px; border-radius: 12px;">
          <h2 style="color: #C5A059; margin-bottom: 24px; border-bottom: 1px solid #2A2A2A; padding-bottom: 16px;">
            📩 New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C5A059;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Company URL</td><td style="padding: 8px 0;">${companyUrl || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Company Size</td><td style="padding: 8px 0;">${companySize}</td></tr>
            <tr><td style="padding: 8px 0; color: #9A9A9A;">Business Goal</td><td style="padding: 8px 0;">${displayGoal}</td></tr>
            ${notes ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Notes</td><td style="padding: 8px 0;">${notes}</td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 0; color: #9A9A9A;">Message</td><td style="padding: 8px 0;">${message}</td></tr>` : ""}
          </table>
          <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #2A2A2A; color: #9A9A9A; font-size: 12px;">
            Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
          </p>
        </div>`,
    });

    /* Also log to server console as backup */
    console.log(`📩 Submission from ${name} (${email}) — ${displayGoal}`);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
