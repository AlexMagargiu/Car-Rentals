import { FaPhone } from "react-icons/fa6";

export default function BookCarBanner() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-4 px-8 py-12 text-center bg-banner md:flex-row md:text-start md:gap-16">
      <p className="text-4xl font-bold text-white">
        Book a car by getting in touch with us
      </p>
      <div className="flex flex-row items-center flex-shrink-0 gap-2 text-3xl font-bold text-secondary_text">
        <FaPhone />
        <p>0712 345 678</p>
      </div>
    </section>
  );
}
