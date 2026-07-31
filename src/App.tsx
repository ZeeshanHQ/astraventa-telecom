import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Setup from "./components/Setup";
import AboutUsSection from "./components/ui/about-us-section";
import Features from "./components/Features";
import Standards from "./components/Standards";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Documentation from "./pages/Documentation";
import Infrastructure from "./pages/Infrastructure";
import AiReceptionist from "./pages/AiReceptionist";
import ChatWidget from "./components/ChatWidget";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import JoinNewsletter from "./components/JoinNewsletter";

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

  if (route === "#/ai-receptionist") {
    return <AiReceptionist />;
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
      <Testimonial />
      <FAQ />
      <JoinNewsletter />
      <Footer />
      <ChatWidget />
    </main>
  );
}

export default App;
