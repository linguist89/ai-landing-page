import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials3";
import FeaturesListicle from "@/components/FeaturesListicle";
import DataTable from "@/components/CustomDataTable";
import CustomFeaturesListicle from "@/components/CustomFeaturesListicle";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CustomFeaturesListicle />
        <FeaturesListicle />
        <Testimonial />
        <DataTable />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}