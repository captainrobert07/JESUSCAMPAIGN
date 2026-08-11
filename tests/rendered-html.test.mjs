import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete church homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Jesus Campaign Church \| Trivandrum &amp; Wayanad<\/title>/i,
  );
  assert.match(html, /JESUS/);
  assert.match(html, /CAMPAIGN/);
  assert.match(html, /Come as/);
  assert.match(html, /One church, two locations/);
  assert.match(html, /House of Worship/i);
  assert.match(html, /August 22, 2026/i);
  assert.match(html, /QP52v2ANrQe6PvCA6/i);
  assert.match(html, /Register free/i);
  assert.match(html, /abide\.youth\.collective/i);
  assert.match(html, /facebook\.com\/share\/1Hd77sPhWo/i);
  assert.match(html, /Trivandrum/i);
  assert.match(html, /Gallery/i);
  assert.match(html, /community-notes\.png/i);
  assert.equal((html.match(/class="gallery-item"/g) ?? []).length, 20);
  assert.match(html, /Plan your visit/i);
  assert.match(html, /Skip to content/i);
  assert.doesNotMatch(
    html,
    /codex-preview|SkeletonPreview|Your site is taking shape/i,
  );
});

test("renders the message confirmation route and removes starter artifacts", async () => {
  const response = await render("/message-received");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Message/);
  assert.match(html, /received/i);
  assert.match(html, /Return to the website/i);

  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Jesus Campaign Church/);
  assert.match(layout, /Jesus Campaign Church \| Trivandrum & Wayanad/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await Promise.all([
    assert.rejects(
      access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
    ),
    assert.rejects(
      access(new URL("../app/_sites-preview/preview.css", import.meta.url)),
    ),
  ]);
});

test("renders the House of Worship event page", async () => {
  const response = await render("/house-of-worship");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /House of Worship/);
  assert.match(html, /A day set apart for His presence/i);
  assert.match(html, /ABIDE Youth Collective/i);
  assert.match(html, /August 22, 2026/i);
  assert.match(html, /10 AM to 5 PM/i);
  assert.match(html, /Pattom, Trivandrum/i);
  assert.match(html, /QP52v2ANrQe6PvCA6/i);
  assert.match(html, /blue-main-poster\.png/i);
  assert.match(html, /registration-qr\.png/i);
  assert.match(html, /abide\.youth\.collective/i);
  assert.match(html, /facebook\.com\/share\/1Hd77sPhWo/i);
  assert.match(html, /Register free/i);
});

test("renders the House of Worship registration confirmation route", async () => {
  const response = await render("/house-of-worship/registered?name=Robert");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Registration received/i);
  assert.match(html, /Robert/);
  assert.match(html, /in the room/i);
  assert.match(html, /August 22/i);
});
