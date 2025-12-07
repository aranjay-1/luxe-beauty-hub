import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialsPreview />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
