import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Standards from "./components/Standards";
import Features from "./components/Features";
import Setup from "./components/Setup";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Documentation from "./pages/Documentation";
import AboutUsSection from "./components/ui/about-us-section";
import Infrastructure from "./pages/Infrastructure";

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "#/privacy") {
    return <PrivacyPolicy />;
  }

  if (route === "#/terms") {
    return <TermsOfService />;
  }

  if (route === "#/docs") {
    return <Documentation />;
  }

  if (route === "#/infrastructure" || route === "#/infra") {
    return <Infrastructure />;
  }

  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Metrics />
      <Setup />
      <AboutUsSection />
      <Features />
      <Standards />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
