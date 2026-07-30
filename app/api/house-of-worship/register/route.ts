type D1Result = {
  success: boolean;
  error?: string;
};

type D1DatabaseLike = {
  prepare(query: string): {
    bind(...values: Array<string>): {
      run(): Promise<D1Result>;
    };
  };
};

type Registration = {
  registrationId: string;
  fullName: string;
  location: string;
  contactNumber: string;
  eventDate: string;
  createdAt: string;
};

function sanitize(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

async function getCloudflareDb() {
  try {
    const dynamicImport = new Function(
      "specifier",
      "return import(specifier)",
    ) as (specifier: string) => Promise<{ env?: { DB?: D1DatabaseLike } }>;
    const workers = await dynamicImport("cloudflare:workers");

    return workers.env?.DB ?? null;
  } catch {
    return null;
  }
}

async function sendWebhook(registration: Registration) {
  const webhookUrl = process.env.HOUSE_OF_WORSHIP_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(registration),
  });

  if (!response.ok) {
    throw new Error("The registration webhook did not accept the submission.");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const fullName = sanitize(payload.fullName, 90);
    const location = sanitize(payload.location, 90);
    const contactNumber = sanitize(payload.contactNumber, 40);

    if (!fullName || !location || !contactNumber) {
      return Response.json(
        { error: "Full name, location, and contact number are required." },
        { status: 400 },
      );
    }

    const registration: Registration = {
      registrationId: crypto.randomUUID(),
      fullName,
      location,
      contactNumber,
      eventDate: "2026-08-29",
      createdAt: new Date().toISOString(),
    };

    const db = await getCloudflareDb();

    if (db) {
      const result = await db
        .prepare(
          "INSERT INTO house_of_worship_registrations (registration_id, full_name, location, contact_number, event_date, created_at) VALUES (?, ?, ?, ?, ?, ?)",
        )
        .bind(
          registration.registrationId,
          registration.fullName,
          registration.location,
          registration.contactNumber,
          registration.eventDate,
          registration.createdAt,
        )
        .run();

      if (!result.success) {
        throw new Error(result.error ?? "Registration could not be saved.");
      }

      return Response.json(
        { ok: true, registrationId: registration.registrationId },
        { status: 201 },
      );
    }

    if (await sendWebhook(registration)) {
      return Response.json(
        { ok: true, registrationId: registration.registrationId },
        { status: 201 },
      );
    }

    console.info(
      "[house-of-worship-registration]",
      JSON.stringify(registration),
    );

    return Response.json(
      {
        ok: true,
        registrationId: registration.registrationId,
        storage: "server-log",
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Registration failed.";

    return Response.json({ error: message }, { status: 500 });
  }
}
