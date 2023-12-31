import { FaRegClock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import heroBg from "../../assets/herobg.png";
import lexuses from "../../assets/lexuses.png";

export default function Hero() {
  return (
    <section className="flex flex-col items-center h-screen justify-center gap-4 font-bold text-xl text-center lg:items-start lg:text-left max-w-screen-xl mx-auto px-6">
      <img
        src={heroBg}
        className="absolute right-0 top-0 z-10 invisible lg:visible"
      ></img>
      <div className="flex flex-col items-center gap-4 z-40 lg:items-start relative w-full">
        <img
          src={lexuses}
          className="absolute right-0 z-[-1] top-[-1rem] invisible lg:visible w-[52.5%]"
        />
        <h4 className="text-2xl">Plan your trip now</h4>
        <h1 className="text-6xl max-w-lg">
          Save <span className="text-secondary_text">big</span> with our car
          rental
        </h1>
        <p className="text-lg font-light opacity-50 max-w-lg">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more
        </p>
      </div>
      <div className="flex flex-col gap-4 z-40 sm:flex-row">
        <button className="flex items-center justify-center gap-2 bg-secondary_text text-white w-64 py-8 rounded-md sm:w-48 sm:py-6">
          Book Ride <FaRegClock />
        </button>
        <button className="flex items-center justify-center gap-2 bg-black w-64 py-8 rounded-md text-white sm:w-48 sm:py-6">
          Learn More <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
