import { FaCarSide } from "react-icons/fa6";

export default function CarModelSpecifications({
  model,
  hp,
  transmission,
  fuel,
}) {
  return (
    <div className="flex justify-between text-xl opacity-60">
      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-2">
          <FaCarSide /> {model}
        </p>
        <p className="flex items-center gap-2">
          <FaCarSide /> {hp}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="flex items-center justify-end gap-2">
          {transmission} <FaCarSide />
        </p>
        <p className="flex items-center justify-end gap-2">
          {fuel} <FaCarSide />
        </p>
      </div>
    </div>
  );
}
