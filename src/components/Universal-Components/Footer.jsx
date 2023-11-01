import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export default function Footer() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 gap-16 py-24 md:grid-cols-2 xl:flex xl:w-full xl:justify-between xl:items-start">
      <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-start">
        <h4 className="text-2xl">
          <span className="font-bold">CAR</span> Rental
        </h4>
        <p className="max-w-[14rem] opacity-50">
          We offer a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex flex-col text-lg">
          <div className="flex items-center gap-4 font-bold">
            <FaPhoneAlt />
            0712 345 678
          </div>
          <div className="flex items-center gap-4 font-bold">
            <AiFillMail />
            carrental@gmail.com
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-lg md:items-start">
        <h4 className="font-bold text-2xl">COMPANY</h4>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-start">
        <h4 className="font-bold text-2xl">WORKING HOURS</h4>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sar: 9:00AM - 7:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center md:items-start">
        <h4 className="font-bold text-2xl">SUBSCRIPTION</h4>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="w-full py-4 px-8 bg-border_faq outline-none max-w-lg"
        ></input>
        <button className="flex justify-center gap-2 text-white bg-secondary_text w-full py-4 font-bold max-w-lg">
          Submit
        </button>
      </div>
    </section>
  );
}
