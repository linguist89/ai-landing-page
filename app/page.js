import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomFeaturesListicle from "@/components/CustomFeaturesListicle";
import Newsletter from "@/components/CustomNewsLetter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div id="custom-features">
          <CustomFeaturesListicle />
        </div>
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}