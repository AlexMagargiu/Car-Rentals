import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import CarModels from "../components/CarModels";
import Banner from "../components/Banner";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <BookCar />
      <PlanTrip />
      <CarModels />
      <Banner />
      <WhyUs />
      <Testimonials />
      <FAQ />
    </section>
  );
}
