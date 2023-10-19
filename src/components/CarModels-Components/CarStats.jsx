import CarStatsLine from "./CarStatsLine";

export default function CarStats(props) {
  return (
    <div>
      <div className="bg-secondary_text px-4 py-2 text-white text-2xl">
        <span className="font-bold ">{props.price}</span> / price per day
      </div>
      <div className="flex flex-col">
        <CarStatsLine text="Producer" information={props.brand} />
        <CarStatsLine text="Model" information={props.model} />
        <CarStatsLine text="Year" information={props.year} />
        <CarStatsLine text="Doors" information={props.doors} />
        <CarStatsLine text="HP" information={props.hp} />
        <CarStatsLine text="Transmission" information={props.transmission} />
        <CarStatsLine text="Fuel Type" information={props.fuel} />
      </div>
      <button className="bg-secondary_text py-2 px-4 text-white text-2xl w-full mt-2 font-bold">
        Reserve Now
      </button>
    </div>
  );
}
