"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Jesus Campaign Church,",
      "",
      `Name: ${data.get("name")}`,
      `Phone or email: ${data.get("contact")}`,
      `Enquiry: ${data.get("reason")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/919048065353?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    router.push("/message-received");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Phone or email</span>
        <input name="contact" type="text" autoComplete="email" required />
      </label>
      <label>
        <span>How can we help?</span>
        <select name="reason" defaultValue="Plan a visit">
          <option>Plan a visit</option>
          <option>Prayer request</option>
          <option>Wayanad branch details</option>
          <option>Jesus Campaign Youth</option>
          <option>General enquiry</option>
        </select>
      </label>
      <label>
        <span>Your message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="button button-light" type="submit">
        Send message <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
