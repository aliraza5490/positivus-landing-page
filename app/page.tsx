import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import CaseStudies from "@/components/CaseStudies";
import WorkingProcess from "@/components/WorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#191A23] flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col gap-4 sm:gap-8">
        <Hero />
        <LogosMarquee />
        <Services />
        <CtaBanner />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

