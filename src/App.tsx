import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import InteractiveDemo from "./components/InteractiveDemo";
import StylingOptions from "./components/StylingOptions";
import Engines from "./components/Engines";
import Configuration from "./components/Configuration";
import ChangelogSection from "./components/ChangelogSection";
import WhyGac from "./components/WhyGac";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <HowItWorks />
        <InteractiveDemo />
        <StylingOptions />
        <Engines />
        <Configuration />
        <ChangelogSection />
        <WhyGac />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;
