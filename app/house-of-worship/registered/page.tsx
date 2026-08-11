import Link from "next/link";

export default async function HouseOfWorshipRegistered({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; id?: string }>;
}) {
  const params = await searchParams;
  const name = params.name?.trim() || "friend";

  return (
    <main className="confirmation-page event-confirmation">
      <div className="confirmation-top">House of Worship</div>
      <div className="confirmation-inner">
        <p className="eyebrow">Registration received</p>
        <h1>
          See you
          <br />
          <em>in the room.</em>
        </h1>
        <p>
          {name}, your place has been noted for House of Worship on August 22,
          2026 from 10 AM to 5 PM at Pattom, Trivandrum. Come expectant. Bring a heart
          ready to worship, and let the day become a living altar.
        </p>
        <Link className="button button-light" href="/">
          Return to the website <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
