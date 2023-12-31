import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomFeaturesListicle from "@/components/CustomFeaturesListicle";
import Newsletter from "@/components/CustomNewsLetter";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3755429,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }}
      />
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