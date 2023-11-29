import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CodeDisplayComponent from "@/components/CustomCodeDisplayComponent";
import CodeGrid from "@/components/CodeGrid";

export default function Home() {

    return (
        <>
            <main>
                <Hero />
                <CodeGrid />
                <CTA />
            </main>
            <Footer />
        </>
    );
}