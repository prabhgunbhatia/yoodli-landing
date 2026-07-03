import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IG Technologies | AI-Powered Cybersecurity",
  description:
    "IG Technologies builds AI-driven threat detection, managed security operations, and offensive security services that keep modern enterprises safe from evolving cyber threats.",
  keywords: [
    "IG Technologies",
    "AI cybersecurity",
    "managed detection and response",
    "threat detection",
    "penetration testing",
    "cloud security",
  ],
  openGraph: {
    title: "IG Technologies | AI-Powered Cybersecurity",
    description:
      "AI-driven threat detection, managed security operations, and offensive security services for modern enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
