import CarStatsLine from "./CarStatsLine";

export default function CarStats(props) {
  return (
    <div>
      <div>
        <span>{props.price}</span> / price per day
      </div>
      <div>
        <CarStatsLine text="Producer" information={props.brand} />
        <CarStatsLine text="Model" information={props.model} />
        <CarStatsLine text="Year" information={props.year} />
        <CarStatsLine text="Doors" information={props.doors} />
        <CarStatsLine text="HP" information={props.hp} />
        <CarStatsLine text="Transmission" information={props.transmission} />
        <CarStatsLine text="Fuel Type" information={props.fuel} />
      </div>
      <button>Reserve Now</button>
    </div>
  );
}
