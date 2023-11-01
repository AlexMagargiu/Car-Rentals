import googleapps from "../../assets/googleapps.svg";
import appstore from "../../assets/appsstore.svg";

export default function OurApp() {
  return (
    <section className="w-full mx-auto px-6 py-24 bg-gray-200 flex justify-center">
      <div className="max-w-5xl text-center flex flex-col gap-6 items-center">
        <h4 className="font-bold text-5xl leading-tight">
          Download our app to get the most out of it
        </h4>
        <p className="opacity-50 text-lg">
          Maximize your car rental experience by downloading our app. Gain
          instant access to a wide vehicle selection, exclusive discounts,
          real-time booking, and more. Don't wait - unlock the full potential of
          your rentals today!
        </p>
        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <a href="_blank">
            <img src={googleapps}></img>
          </a>
          <a href="_blank">
            <img src={appstore}></img>
          </a>
        </div>
      </div>
    </section>
  );
}
