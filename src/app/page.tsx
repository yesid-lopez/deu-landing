import { Features } from "@/components/features";
import Hero from "@/components/hero";
import MainLayout from "@/components/layout/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
}
