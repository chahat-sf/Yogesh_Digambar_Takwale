import Contact from "@/component/pages/home/Conatct";
import FAQ from "@/component/pages/home/Faq";
import Hero from "@/component/pages/home/Hero";
import Services from "@/component/pages/home/Services";
import WhatweCard from "@/component/pages/home/whatweCard";
export default function Home() {
  return (
      <main>
        <Hero />
        <Services/>
        <WhatweCard/>
        <FAQ/>
        <Contact/>
        
      </main>
  );
}
