import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusSection from "@/components/FocusSection";
import ServicesSection from "@/components/ServicesSection";
import DeliveryPartnerSection from "@/components/DeliveryPartnerSection";
import ExperienceSection from "@/components/ExperienceSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <Hero />
      <FocusSection />
      <ServicesSection />
      <DeliveryPartnerSection />
      <ExperienceSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
