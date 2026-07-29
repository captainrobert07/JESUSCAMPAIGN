import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesus-campaign.vercel.app"),
  title: "Jesus Campaign Church | Thiruvananthapuram & Wayanad",
  description:
    "Jesus Campaign Church in Pattom, Thiruvananthapuram, with a branch in Wayanad. A place to worship, grow, belong, and make Jesus known.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Jesus Campaign Church | Thiruvananthapuram & Wayanad",
    description:
      "A church family in Thiruvananthapuram and Wayanad, Kerala.",
    images: [
      {
        url: "/og.png",
        width: 1743,
        height: 907,
        alt: "Jesus Campaign Church in Thiruvananthapuram and Wayanad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Campaign Church",
    description:
      "A church family in Thiruvananthapuram and Wayanad, Kerala.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
