import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Natural Incense — A Digital Museum of Aromatic Culture",
    template: "%s — Natural Incense",
  },
  description:
    "Exploring the history, materials, craftsmanship, and philosophy of Eastern incense traditions. A digital museum dedicated to the preservation of natural incense knowledge.",
  keywords: [
    "natural incense",
    "incense culture",
    "agarwood",
    "sandalwood",
    "kodo",
    "japanese incense",
    "chinese incense",
    "aromatic materials",
    "incense craftsmanship",
    "meditation",
    "mindfulness",
  ],
  metadataBase: new URL("https://naturalincense.de"),
  openGraph: {
    type: "website",
    locale: "en_EU",
    siteName: "Natural Incense",
    title: "Natural Incense — A Digital Museum of Aromatic Culture",
    description:
      "Exploring the history, materials, craftsmanship, and philosophy of Eastern incense traditions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Incense — A Digital Museum of Aromatic Culture",
    description:
      "Exploring the history, materials, craftsmanship, and philosophy of Eastern incense traditions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-ivory text-charcoal font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
