import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsNaturalIncense from "@/components/sections/WhatIsNaturalIncense";
import MaterialsLibrary from "@/components/sections/MaterialsLibrary";
import ThreeDMaterials from "@/components/sections/ThreeDMaterials";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Philosophy from "@/components/sections/Philosophy";
import ResearchJournal from "@/components/sections/ResearchJournal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsNaturalIncense />
        <MaterialsLibrary />
        <ThreeDMaterials />
        <HistoryTimeline />
        <Craftsmanship />
        <Philosophy />
        <ResearchJournal />
      </main>
      <Footer />
    </>
  );
}
