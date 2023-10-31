import Reviews from "./Testimonials-Components/Reviews";
import johndoe from "../assets/johndoe.jpg";
import janedoe from "../assets/janedoe.jpg";

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center pb-28 max-w-screen-xl mx-auto px-6 gap-16">
      <div className="flex flex-col items-center text-center gap-3">
        <h4 className="text-2xl font-bold">Reviewed by People</h4>
        <h2 className="text-5xl font-bold">Client's Testimonials</h2>
        <p className="max-w-2xl opacity-50">
          Discover the positive impact we'be made on our client by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex gap-8">
        <div>
          <Reviews
            quote="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
            img={johndoe}
            name="John Doe"
            location="Bucharest"
          />
        </div>
        <div className="hidden lg:block">
          <Reviews
            quote="The car was in great condition and made our trip even better. Highly recommend this car rental website! Great owners as well!"
            img={janedoe}
            name="Jane Doe"
            location="Cluj Napoca"
          />
        </div>
      </div>
    </section>
  );
}
