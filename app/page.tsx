import Contact from "@/component/pages/home/Conatct";
import Hero from "@/component/pages/home/Hero";
import Services from "@/component/pages/home/Services";
import WhatweCard from "@/component/pages/home/whatweCard";
export default function Home() {
  return (
      <main>
        <Hero />
        <Services/>
        <WhatweCard/>
        <Contact/>
        
      </main>
  );
}
