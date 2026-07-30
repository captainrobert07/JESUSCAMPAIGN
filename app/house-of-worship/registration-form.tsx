"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = "idle" | "submitting" | "error";

export function HouseOfWorshipRegistrationForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: data.get("fullName"),
      location: data.get("location"),
      contactNumber: data.get("contactNumber"),
    };

    try {
      const response = await fetch("/api/house-of-worship/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        registrationId?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Please try again.");
      }

      const name = encodeURIComponent(String(payload.fullName ?? ""));
      const id = encodeURIComponent(result.registrationId ?? "");
      router.push(`/house-of-worship/registered?name=${name}&id=${id}`);
    } catch (submitError) {
      setState("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Please try again.",
      );
    }
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <span>Full name</span>
        <input name="fullName" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Location</span>
        <input
          name="location"
          type="text"
          autoComplete="address-level2"
          placeholder="Pattom, Trivandrum"
          required
        />
      </label>
      <label>
        <span>Contact number</span>
        <input
          name="contactNumber"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </label>
      {state === "error" ? <p className="form-error">{error}</p> : null}
      <button
        className="button button-light"
        type="submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Recording..." : "Register free"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
