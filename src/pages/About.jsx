import AboutHero from "../components/About-Components/AboutHero";
import PlanTrip from "../components/Home-Components/PlanTrip";
import BookCarBanner from "../components/About-Components/AboutHero-Components/BookCarBanner";
import Footer from "../components/Universal-Components/Footer";

export default function About() {
  return (
    <section className="flex flex-col items-center">
      <AboutHero />
      <PlanTrip />
      <BookCarBanner />
      <Footer />
    </section>
  );
}
