import TopBand from "@/components/TopBand";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import Transformation from "@/components/Transformation";
import About from "@/components/About";
import CourseContent from "@/components/CourseContent";
import Testimonials from "@/components/Testimonials";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBand />
      <SiteHeader />
      <main className="max-w-[740px] mx-auto px-5">
        <Hero />
        <TrustBar />
        <PainPoints />
        <Transformation />
        <About />
        <CourseContent />
        <Testimonials />
        <Audience />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
