import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
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