import CarLocation from "./BookCar-Components/CarLocation";
import CarDate from "./BookCar-Components/CarDate";
import { FaCarSide } from "react-icons/fa6";
import bookBg from "../assets/bookbg.png";
import { useState } from "react";
import ErrorMessage from "./BookCar-Components/ErrorMessage";

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
    backgroundSize: `cover`,
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
    <section className="max-w-screen-xl mx-auto px-6">
      <div
        className="flex flex-col text-lg p-4 bg-white shadow-[0_10px_20px_0_rgba(0,0,0,.1);] md:z-50 md:relative sm:pt-8 sm:pb-14 sm:px-12"
        style={backgroundImage}
      >
        <h2 className="font-extrabold text-2xl p-4 md:text-3xl">Book a car</h2>
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
        <form className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="cars"
              className="flex items-center text-xl font-bold my-3"
            >
              <FaCarSide className="mr-3" />
              Select car model
              <span className="text-secondary_text">*</span>
            </label>
            <select
              id="cars"
              onChange={handleCarChange}
              className="bg-option_bg p-4 rounded-md outline-none w-full border border-border"
              required
            >
              <option value="">Select car model</option>
              <option value="Arteon">Volkswagen Arteon</option>
              <option value="M5">BMW M5</option>
              <option value="XC90">Volvo XC90</option>
              <option value="CLS">Mercedes-Benz CLS</option>
              <option value="Camaro">Chevrolet Camaro</option>
              <option value="ETron">Audi E-Tron GT</option>
            </select>
          </div>
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
            type="submit"
            className="w-full font-bold text-xl text-white bg-secondary_text border border-secondary_text rounded-md mt-4 py-4 sm:mt-0 sm:self-end"
            onClick={() => {
              checkFields();
              checkDates();
            }}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
