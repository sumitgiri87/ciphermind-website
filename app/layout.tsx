import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

// -----------------------------------------------
// Font configuration
// Display / mono: Space Mono — technical, precise
// Body: DM Sans — clean, modern, readable
// -----------------------------------------------
const spaceMono = Space_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// -----------------------------------------------
// Site-wide metadata
// -----------------------------------------------
export const metadata: Metadata = {
  title: "CipherMind – AI-Driven Cybersecurity & Cryptography Solutions",
  description:
    "CipherMind provides AI-driven cybersecurity, DevSecOps, and cryptographic consulting services.",
  metadataBase: new URL("https://ciphermind.ca"),
  openGraph: {
    title: "CipherMind – AI-Driven Cybersecurity & Cryptography Solutions",
    description:
      "CipherMind provides AI-driven cybersecurity, DevSecOps, and cryptographic consulting services.",
    url: "https://ciphermind.ca",
    siteName: "CipherMind",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherMind – AI-Driven Cybersecurity & Cryptography Solutions",
    description:
      "CipherMind provides AI-driven cybersecurity, DevSecOps, and cryptographic consulting services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-[#050d1a] text-[#e8edf4] min-h-screen">
        {children}
      </body>
    </html>
  );
}
