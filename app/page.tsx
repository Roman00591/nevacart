import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
