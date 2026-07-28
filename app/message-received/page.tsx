import Link from "next/link";

export default function MessageReceived() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-top">Jesus Campaign Church</div>
      <div className="confirmation-inner">
        <p className="eyebrow">Thank you</p>
        <h1>
          Message
          <br />
          <em>received.</em>
        </h1>
        <p>
          Thank you for reaching out. The church team will contact you using
          the details you provided.
        </p>
        <Link className="button button-light" href="/">
          Return to the website <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
