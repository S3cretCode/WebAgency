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
    const { name, email, companyUrl, companySize, businessGoal, message } = body;

    /* Validation */
    const errors = [];
    if (!name?.trim()) errors.push("Name is required.");
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("A valid email address is required.");
    }
    if (!companySize?.trim()) errors.push("Company size is required.");
    if (!businessGoal?.trim()) errors.push("Business goal is required.");

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join(" ") },
        { status: 400 }
      );
    }

    /* Log the submission (replace with email service in production) */
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📩 NEW CONTACT FORM SUBMISSION");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`Name:          ${name}`);
    console.log(`Email:         ${email}`);
    console.log(`Company URL:   ${companyUrl || "—"}`);
    console.log(`Company Size:  ${companySize}`);
    console.log(`Business Goal: ${businessGoal}`);
    console.log(`Message:       ${message || "—"}`);
    console.log(`Submitted:     ${new Date().toISOString()}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    /*
     * TODO: Production email integration
     * Uncomment and configure the Resend block below after setup.
     * See DOCUMENTATION.md for full instructions.
     *
     * const { Resend } = require("resend");
     * const resend = new Resend(process.env.RESEND_API_KEY);
     *
     * await resend.emails.send({
     *   from: "Premium WebServices <noreply@yourdomain.com>",
     *   to: ["hello@premiumwebservices.co"],
     *   subject: `New Inquiry from ${name} — ${companySize}`,
     *   html: `<h2>New Contact Submission</h2>
     *          <p><strong>Name:</strong> ${name}</p>
     *          <p><strong>Email:</strong> ${email}</p>
     *          <p><strong>Company URL:</strong> ${companyUrl || "—"}</p>
     *          <p><strong>Company Size:</strong> ${companySize}</p>
     *          <p><strong>Business Goal:</strong> ${businessGoal}</p>
     *          <p><strong>Message:</strong> ${message || "—"}</p>`,
     * });
     */

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
