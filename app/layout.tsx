import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesuscampaign.vercel.app"),
  applicationName: "Jesus Campaign Church",
  title: {
    default: "Jesus Campaign Church | Trivandrum & Wayanad",
    template: "%s | Jesus Campaign Church",
  },
  description:
    "Jesus Campaign Church in Pattom, Trivandrum, with a branch in Wayanad. A church family growing in worship, the Word, community, and mission.",
  keywords: [
    "Jesus Campaign Church",
    "Trivandrum church",
    "Pattom church",
    "Wayanad church",
    "House of Worship",
    "Kerala church",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Jesus Campaign Church",
    title: "Jesus Campaign Church | Trivandrum & Wayanad",
    description:
      "A church family in Trivandrum and Wayanad, Kerala. Worship, grow, belong, and make Jesus known.",
    images: [
      {
        url: "/og.png",
        width: 1743,
        height: 907,
        alt: "Jesus Campaign Church in Trivandrum and Wayanad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Campaign Church | Trivandrum & Wayanad",
    description:
      "A church family in Trivandrum and Wayanad, Kerala.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/jesus-campaign-logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/jesus-campaign-logo.png",
    apple: "/jesus-campaign-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
