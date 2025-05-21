import { AboutSection, Hero, ProjectsSection, ContactSection, Footer } from "../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Home page component that renders the main sections of the portfolio.
 *
 * Features:
 * - Renders Hero, ProjectsSection, AboutSection, and ContactSection components
 * - Smoothly scrolls to a section if location.state.scrollTo is set (e.g., from navigation)
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
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
