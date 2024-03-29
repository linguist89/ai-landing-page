import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CodeGrid from "@/components/CodeGrid";
import Header from "@/components/Header";
import TestSection from "@/components/CustomTestSection";

export default function Home() {

    return (
        <>
            <Header />
            <main>
                <TestSection />
                <Hero />
                <CodeGrid />
            </main>
            <Footer />
        </>
    );
}