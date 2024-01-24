import Hero from "../components/Home-Components/Hero";
import BookCar from "../components/Home-Components/BookCar";
import PlanTrip from "../components/Home-Components/PlanTrip";
import CarModels from "../components/Home-Components/CarModels";
import Banner from "../components/Home-Components/Banner";
import WhyUs from "../components/Home-Components/WhyUs";
import TestimonialsComp from "../components/Home-Components/TestimonialsComp";
import FAQ from "../components/Home-Components/FAQ";
import OurApp from "../components/Home-Components/OurApp";
import Footer from "../components/Universal-Components/Footer";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <BookCar />
      <PlanTrip />
      <CarModels />
      <Banner />
      <WhyUs />
      <TestimonialsComp />
      <FAQ />
      <OurApp />
      <Footer />
    </section>
  );
}
