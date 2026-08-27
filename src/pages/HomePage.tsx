import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
// import PlaySection from "../components/PlaySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <AboutSection />
      {/* Play section hidden for now — restore <PlaySection /> here and its nav link in Nav.tsx */}
      {/* <PlaySection /> */}
      <Footer />
    </>
  );
}
