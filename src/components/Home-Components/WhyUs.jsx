import fleet from "../../assets/fleet.png";
import { FaChevronRight } from "react-icons/fa6";
import crosscountry from "../../assets/crosscountry.png";
import money from "../../assets/money.png";
import money2 from "../../assets/money2.png";

export default function WhyUs() {
  return (
    <section className="flex flex-col items-center py-28 max-w-screen-xl mx-auto px-6 gap-6">
      <img src={fleet} alt="image of 3 luxury cars"></img>
      <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center text-center gap-6 lg:max-w-lg lg:text-start lg:items-start">
          <h4 className="text-2xl font-bold">Why Choose Us</h4>
          <h2 className="text-5xl font-bold">
            Best valued deals you will ever find
          </h2>
          <p className="opacity-50">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="flex items-center gap-2 text-white bg-secondary_text px-8 py-4 rounded-md font-bold">
            Find Details <FaChevronRight />
          </button>
        </div>
        <div className="flex flex-col items-center pt-12 gap-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:gap-4">
            <img src={crosscountry}></img>
            <div className="max-w-sm">
              <h4 className="text-3xl font-bold">Cross Country Drive</h4>
              <p className="leading-7 text-lg pt-2">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:flex-row sm:gap-4">
            <img src={money}></img>
            <div className="max-w-sm">
              <h4 className="text-3xl font-bold">All Inclusive Pricing</h4>
              <p className="leading-7 text-lg pt-2">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:flex-row sm:gap-4">
            <img src={money2}></img>
            <div className="max-w-sm">
              <h4 className="text-3xl font-bold">No Hidden Charges</h4>
              <p className="leading-7 text-lg pt-2">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
