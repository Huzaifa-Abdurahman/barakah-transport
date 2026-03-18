import Hero from "@/components/sections/Hero";
import UnderHero from "@/components/sections/UnderHero";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Mission from "@/components/sections/Mission";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <UnderHero />
      <WhyUs />
      <Services />
      <Mission />
      <Testimonials />
    </main>
  );
}
