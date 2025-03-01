import { Features } from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { AnnouncementBar } from "@/components/announcement-bar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AnnouncementBar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
