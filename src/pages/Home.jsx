import { AboutSection, Hero, ProjectsSection, ContactSection, Footer } from "../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
