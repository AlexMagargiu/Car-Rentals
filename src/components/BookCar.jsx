import CarLocation from "./CarLocation";
import CarDate from "./CarDate";
import { FaCarSide } from "react-icons/fa6";
import bookBg from "../assets/bookbg.png";
import { useState } from "react";

export default function BookCar() {
  const [selectedDate, setSelectedDate] = useState("");

  const [allFields, setAllFields] = useState(true);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const backgroundImage = {
    backgroundImage: `url(${bookBg})`,
  };

  function checkFields() {}

  return (
    <section
      className="flex flex-col text-lg p-4 shadow-[0_10px_20px_0_rgba(0,0,0,.1);]"
      style={backgroundImage}
    >
      <h2 className="font-extrabold text-2xl p-4">Book a car</h2>
      <label
        htmlFor="cars"
        className="flex items-center text-xl font-bold mb-3"
      >
        <FaCarSide className="mr-3" />
        Select car model
        <span className="text-secondary_text">*</span>
      </label>
      <select
        id="cars"
        className="bg-option_bg p-4 rounded-md outline-none w-full"
      >
        <option>Select car model</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E</option>
        <option value="f">F</option>
      </select>
      <CarLocation id="pick" type="Pick up location" />
      <CarLocation id="drop" type="Drop off location" />
      <CarDate
        id="pickDate"
        type="Pick up date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <CarDate
        id="dropDate"
        type="Drop off date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button className="w-full font-bold text-xl text-white bg-secondary_text mt-4 py-4">
        Search
      </button>
    </section>
  );
}
