import carCheck from "../../assets/carcheck.png";
import operator from "../../assets/operator.png";
import carWind from "../../assets/carwind.png";

export default function PlanTrip() {
  return (
    <section className="flex flex-col items-center w-full max-w-screen-lg gap-4 px-6 py-16 mx-auto lg:gap-2">
      <h4 className="text-3xl font-bold text-center">Plan your trip now</h4>
      <h2 className="text-5xl font-bold leading-tight text-center">
        Quick & easy car rental
      </h2>
      <div className="lg:flex lg:flex-row lg:justify-evenly lg:w-full">
        <div className="flex flex-col items-center gap-2">
          <img src={carCheck} alt="car with a checkmark"></img>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl font-bold">Select Car</h4>
            <p className="text-center max-w-[12rem] opacity-50">
              Our extensive selection of vehicles caters to a diverse spectrum
              of driving requirements, ensuring that we have the ideal
              automobile to match your specific needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={operator} alt="operator support"></img>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl font-bold ">
              Contact <br></br> Operator
            </h4>
            <p className="text-center max-w-[12rem] opacity-50">
              Our team of well-informed and amiable operators is prepared to
              provide assistance with any inquiries or issues you may have,
              ensuring you have the support you need.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={carWind} alt="car driving"></img>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl font-bold">Let's Drive</h4>
            <p className="text-center max-w-[12rem] opacity-50">
              Whether you're embarking on a journey along the open road or
              navigating city streets, our comprehensive selection of vehicles
              ensures that you're fully equipped with the perfect car for your
              specific adventure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
