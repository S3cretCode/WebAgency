"use client";

import { useState } from "react";
import Button from "./Button";

/**
 * Contact/Qualification form — sleek dark form with gold-bottom borders.
 * Handles submission via Next.js API route at /api/contact.
 * Includes validation and loading/success/error states.
 */
export default function ContactForm({ variant = "full" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyUrl: "",
    companySize: "",
    businessGoal: "",
    otherGoal: "",
    notes: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const companySizes = [
    "1-14 employees",
    "15-50 employees",
    "51-100 employees",
    "100+ employees",
  ];

  const businessGoals = [
    "New website or redesign",
    "Social media growth",
    "Brand positioning",
    "Lead generation",
    "Full digital transformation",
    "Other",
  ];

  /* Update form field; clear otherGoal if switching away from 'Other' */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "businessGoal" && value !== "Other" ? { otherGoal: "" } : {}),
    }));
  };

  /* Submit to API */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        companyUrl: "",
        companySize: "",
        businessGoal: "",
        otherGoal: "",
        notes: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  /* Success state */
  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20
                        flex items-center justify-center">
          <span className="text-gold text-2xl">&#10003;</span>
        </div>
        <h3 className="font-heading text-2xl text-ivory mb-3">
          Thank You
        </h3>
        <p className="text-silver leading-relaxed max-w-md mx-auto">
          We&apos;ve received your inquiry and will be in touch within
          24 business hours. We look forward to learning more about your goals.
        </p>
        <button
          className="mt-6 text-gold text-sm underline underline-offset-4
                     hover:text-gold-light transition-colors duration-300"
          onClick={() => setStatus("idle")}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-8 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="input-gold"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="input-gold"
          />
        </div>

        {/* Company URL */}
        <div>
          <label htmlFor="companyUrl" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Company URL
          </label>
          <input
            id="companyUrl"
            name="companyUrl"
            type="url"
            value={formData.companyUrl}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
            className="input-gold"
          />
        </div>

        {/* Company Size */}
        <div>
          <label htmlFor="companySize" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Company Size *
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            value={formData.companySize}
            onChange={handleChange}
            className="input-gold cursor-pointer appearance-none"
          >
            <option value="" disabled className="bg-obsidian-light">Select range</option>
            {companySizes.map((size) => (
              <option key={size} value={size} className="bg-obsidian-light">{size}</option>
            ))}
          </select>
        </div>

        {/* Primary Business Goal */}
        <div>
          <label htmlFor="businessGoal" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Primary Business Goal *
          </label>
          <select
            id="businessGoal"
            name="businessGoal"
            required
            value={formData.businessGoal}
            onChange={handleChange}
            className="input-gold cursor-pointer appearance-none"
          >
            <option value="" disabled className="bg-obsidian-light">Select goal</option>
            {businessGoals.map((goal) => (
              <option key={goal} value={goal} className="bg-obsidian-light">{goal}</option>
            ))}
          </select>
        </div>

        {/* Conditional "Other" specification field */}
        {formData.businessGoal === "Other" && (
          <div className="md:col-span-2">
            <label htmlFor="otherGoal" className="text-xs uppercase tracking-widest text-silver mb-2 block">
              Please Specify *
            </label>
            <input
              id="otherGoal"
              name="otherGoal"
              type="text"
              required
              value={formData.otherGoal}
              onChange={handleChange}
              placeholder="Describe your primary business goal"
              className="input-gold"
            />
          </div>
        )}

        {/* Additional Notes — always visible */}
        <div className="md:col-span-2">
          <label htmlFor="notes" className="text-xs uppercase tracking-widest text-silver mb-2 block">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional context or requirements..."
            className="input-gold resize-none"
          />
        </div>

        {/* Message — full width on "full" variant only */}
        {variant === "full" && (
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-silver mb-2 block">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or goals..."
              className="input-gold resize-none"
            />
          </div>
        )}
      </div>

      {/* Error Message */}
      {status === "error" && (
        <p className="mt-4 text-red-400 text-sm">{errorMsg}</p>
      )}

      {/* Submit */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </Button>
      </div>
    </form>
  );
}
