import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation",

  description:
    "You are warmly invited to celebrate the Nikah of Mohammed & Bushra. A beautiful beginning written with love and dua.",

  metadataBase: new URL(
    "https://mohammed-wedding-invitation-2026.vercel.app"
  ),

  openGraph: {
    title: "Wedding Invitation",

    description:
      "Join us as we begin this beautiful new chapter with love, family and dua.",

    url: "https://mohammed-wedding-invitation-2026.vercel.app",

    siteName: "Mohammed & Bushra",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mohammed & Bushra Wedding Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Wedding Invitation",

    description:
      "A beautiful beginning written with love and dua.",

    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}