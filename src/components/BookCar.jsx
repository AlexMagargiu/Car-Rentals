import CarLocation from "./CarLocation";
import CarDate from "./CarDate";
import { FaCarSide } from "react-icons/fa6";
import bookBg from "../assets/bookbg.png";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export default function BookCar() {
  const [selectedDatePick, setSelectedDatePick] = useState("");
  const [selectedDateDrop, setSelectedDateDrop] = useState("");
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [allFields, setAllFields] = useState(true);
  const [compareDates, setCompareDates] = useState(true);

  const handleCarChange = (e) => {
    setSelectedCarModel(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateChangePick = (e) => {
    setSelectedDatePick(e.target.value);
  };

  const handleDateChangeDrop = (e) => {
    setSelectedDateDrop(e.target.value);
  };

  const backgroundImage = {
    backgroundImage: `url(${bookBg})`,
  };

  function checkFields() {
    if (
      selectedCarModel === "" ||
      selectedLocation === "" ||
      selectedDatePick === "" ||
      selectedDateDrop === ""
    ) {
      setAllFields(false);
    } else {
      setAllFields(true);
    }
  }

  function checkDates() {
    let datePickTime = new Date(selectedDatePick);
    let dateDropTime = new Date(selectedDateDrop);
    if (datePickTime < dateDropTime) {
      setCompareDates(true);
      console.log(true);
    } else {
      setCompareDates(false);
      console.log(false);
    }
  }

  return (
    <section
      className="flex flex-col text-lg p-4 shadow-[0_10px_20px_0_rgba(0,0,0,.1);]"
      style={backgroundImage}
    >
      <h2 className="font-extrabold text-2xl p-4">Book a car</h2>
      {!allFields && (
        <ErrorMessage
          title="All fields required"
          onClick={() => setAllFields(true)}
        />
      )}
      {!compareDates && (
        <ErrorMessage
          title="Check selected dates"
          onClick={() => setCompareDates(true)}
        />
      )}
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
        onChange={handleCarChange}
        className="bg-option_bg p-4 rounded-md outline-none w-full"
      >
        <option value="">Select car model</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E</option>
        <option value="f">F</option>
      </select>
      <CarLocation
        id="pick"
        type="Pick up location"
        onChange={handleLocationChange}
      />
      <CarLocation
        id="drop"
        type="Drop off location"
        onChange={handleLocationChange}
      />
      <CarDate
        id="pickDate"
        type="Pick up date"
        onChange={handleDateChangePick}
      />
      <CarDate
        id="dropDate"
        type="Drop off date"
        onChange={handleDateChangeDrop}
      />
      <button
        className="w-full font-bold text-xl text-white bg-secondary_text mt-4 py-4"
        onClick={() => {
          checkFields();
          checkDates();
        }}
      >
        Search
      </button>
    </section>
  );
}
