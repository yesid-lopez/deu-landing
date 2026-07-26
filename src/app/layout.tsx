import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
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
    icon: "/DEU.png",
  },
  openGraph: {
    title: "DEU App - German Citizenship Test Prep",
    description:
      "Master the Leben in Deutschland test with our mobile study app. Practice questions, study materials, and test simulations for German citizenship preparation.",
    url: "https://deu.luloai.com",
    siteName: "DEU App",
    images: [
      {
        url: "/DEU.png",
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
    description:
      "Your mobile companion for mastering the Leben in Deutschland test. Practice questions, study materials, and test simulations for German citizenship preparation.",
    images: ["/lulo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
      <Script
        src="https://umami.yesidlopez.de/umami"
        data-website-id="c25ec96d-6cba-44e6-87f8-eb9654655c54"
        strategy="afterInteractive"
      />
    </html>
  );
}
