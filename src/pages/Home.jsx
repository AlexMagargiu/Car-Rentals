import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import CarModels from "../components/CarModels";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <BookCar />
      <PlanTrip />
      <CarModels />
      <Banner />
    </section>
  );
}
