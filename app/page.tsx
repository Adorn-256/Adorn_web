import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TeamLeader } from "@/components/sections/TeamLeader";
import { Portfolio } from "@/components/sections/Portfolio";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <TeamLeader />
      <Services />
      <Portfolio />
      <ClientLogos />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}