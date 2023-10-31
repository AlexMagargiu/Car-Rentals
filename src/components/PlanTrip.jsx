import carCheck from "../assets/carcheck.png";
import operator from "../assets/operator.png";
import carWind from "../assets/carwind.png";

export default function PlanTrip() {
  return (
    <section className="flex flex-col items-center py-16 gap-4 lg:gap-2 max-w-screen-xl mx-auto px-6">
      <h4 className="font-bold text-3xl text-center">Plan your trip now</h4>
      <h2 className="font-bold text-5xl text-center leading-tight">
        Quick & easy car rental
      </h2>
      <div className="lg:flex lg:flex-row lg:justify-evenly lg:w-full">
        <div className="flex flex-col items-center gap-2">
          <img src={carCheck} alt="car with a checkmark"></img>
          <h4 className="font-bold text-2xl">Select Car</h4>
          <p className="text-center max-w-[12rem] opacity-50">
            Our extensive selection of vehicles caters to a diverse spectrum of
            driving requirements, ensuring that we have the ideal automobile to
            match your specific needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={operator} alt="operator support"></img>
          <h4 className="font-bold text-2xl ">
            Contact <br></br> Operator
          </h4>
          <p className="text-center max-w-[12rem] opacity-50">
            Our team of well-informed and amiable operators is prepared to
            provide assistance with any inquiries or issues you may have,
            ensuring you have the support you need.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={carWind} alt="car driving"></img>
          <h4 className="font-bold text-2xl">Let's Drive</h4>
          <p className="text-center max-w-[12rem] opacity-50">
            Whether you're embarking on a journey along the open road or
            navigating city streets, our comprehensive selection of vehicles
            ensures that you're fully equipped with the perfect car for your
            specific adventure
          </p>
        </div>
      </div>
    </section>
  );
}
