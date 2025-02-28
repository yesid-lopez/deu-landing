import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://deu.luloai.com"),
  title: "DEU App - German Citizenship Test Prep",
  description:
    "Your mobile companion for mastering the Leben in Deutschland test. Practice questions, study materials, and test simulations for German citizenship preparation.",
  keywords: [
    "German citizenship test",
    "Leben in Deutschland",
    "Leben in Deutschland test",
    "German language test",
    "citizenship preparation",
    "Germany integration course",
    "mobile study app",
    "Einbürgerungstest",
    "German culture test",
  ],
  icons: {
    icon: "/lulo.png",
  },
  openGraph: {
    title: "DEU App - German Citizenship Test Prep",
    description:
      "Master the Leben in Deutschland test with our mobile study app. Practice questions, study materials, and test simulations for German citizenship preparation.",
    url: "https://deu.luloai.com",
    siteName: "DEU App",
    images: [
      {
        url: "/lulo.png",
        width: 1200,
        height: 630,
        alt: "DEU App - German Citizenship Test Preparation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEU App - German Citizenship Test Prep",
    description: "Your mobile companion for mastering the Leben in Deutschland test. Practice questions, study materials, and test simulations for German citizenship preparation.",
    images: ["/lulo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
