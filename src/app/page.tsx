import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { AppShowcase } from "@/components/app-showcase";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { DownloadCTA } from "@/components/download-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <DownloadCTA />
      <Footer />
    </>
  );
}
