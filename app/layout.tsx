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
  title: "IG Technologies | AI-Native Security for Lean Teams",
  description:
    "IG Technologies is a Hamilton, Ontario-based startup building AI-native threat detection, cloud security, and penetration testing for teams too small for a full-time SOC.",
  keywords: [
    "IG Technologies",
    "AI cybersecurity",
    "threat detection",
    "penetration testing",
    "cloud security posture management",
    "Hamilton Ontario startup",
  ],
  openGraph: {
    title: "IG Technologies | AI-Native Security for Lean Teams",
    description:
      "AI-native threat detection, cloud security, and penetration testing for teams too small for a full-time SOC.",
    type: "website",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('ig-theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
