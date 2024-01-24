import TestimonialsComp from "../components/Home-Components/TestimonialsComp";
import BookCarBanner from "../components/About-Components/AboutHero-Components/BookCarBanner";
import Footer from "../components/Universal-Components/Footer";

export default function Testimonials() {
  return (
    <section className="pt-36 lg:pt-60">
      <TestimonialsComp />
      <BookCarBanner />
      <Footer />
    </section>
  );
}
