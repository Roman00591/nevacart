import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Advantages } from "@/components/advantages";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <Stats />
        <Features />
        <Advantages />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
