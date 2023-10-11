import { FaRegClock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center h-[calc(100vh-96px)] justify-center gap-6 font-bold text-xl text-center">
      <h4>Plan your trip now</h4>
      <h1 className="text-6xl max-w-lg">
        Save <span className="text-secondary_text">big</span> with our car
        rental
      </h1>
      <p className="font-light opacity-70 max-w-xl">
        Rent the car of your dreams. Unbeatable prices, unlimited miles,
        flexible pick-up options and much more
      </p>
      <button className="flex items-center justify-center gap-2 bg-secondary_text w-64 py-8 rounded-2xl">
        Book Ride <FaRegClock />
      </button>
      <button className="flex items-center justify-center gap-2 bg-black w-64 py-8 rounded-2xl text-white">
        Learn More <FaChevronRight />
      </button>
    </section>
  );
}
