import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
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
  title: "LiD",
  description: "Leben in Deutschland",
  icons: {
    icon: "/lulo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PlausibleProvider
        domain="deu.luloai.com"
        customDomain="https://plausible-analytics.yesidlopez.de"
        enabled
        trackLocalhost
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </PlausibleProvider>
    </html>
  );
}
