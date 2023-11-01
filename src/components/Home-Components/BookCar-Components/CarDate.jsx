import { FaCalendarDay } from "react-icons/fa";

export default function CarDate(props) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="flex items-center text-xl font-bold my-3"
      >
        <FaCalendarDay className="mr-3" />
        {props.type}
        <span className="text-secondary_text">*</span>
      </label>
      <input
        id={props.id}
        onChange={props.onChange}
        type="date"
        className="p-4 rounded-md outline-none w-full border border-border"
        required
      ></input>
    </div>
  );
}
