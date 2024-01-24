import CarModelSpecifications from "./CarModel-Components/CarModelSpecifications";
import { FaRegStar } from "react-icons/fa6";

export default function CarModel({
  image,
  name,
  price,
  model,
  hp,
  transmission,
  fuel,
}) {
  return (
    <div className="max-w-xs border border-gray-300">
      <img src={image} className="h-60"></img>
      <div className="flex flex-col gap-6 px-6 py-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold">{name}</p>
            <p className="flex">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">${price}</p>
            <p>per day</p>
          </div>
        </div>
        <div>
          <CarModelSpecifications
            model={model}
            hp={hp}
            transmission={transmission}
            fuel={fuel}
          />
        </div>
        <div className="w-full border border-gray-400 opacity-60"></div>
        <button className="py-4 text-xl font-bold text-white rounded-lg bg-secondary_text ">
          Book Ride
        </button>
      </div>
    </div>
  );
}
