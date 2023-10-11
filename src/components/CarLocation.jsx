import { FaMapMarkerAlt } from "react-icons/fa";

export default function CarLocation(props) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="flex items-center text-xl font-bold my-3"
      >
        <FaMapMarkerAlt className="mr-3" />
        {props.type}
        <span className="text-secondary_text">*</span>
      </label>
      <select
        id={props.id}
        className="bg-option_bg p-4 rounded-md outline-none w-full"
      >
        <option>Select {props.type.toLowerCase()}</option>
        <option value="Bucharest">Bucharest</option>
        <option value="Cluj Napoca">Cluj Napoca</option>
        <option value="Timisoara">Timisoara</option>
        <option value="Iasi">Iasi</option>
        <option value="Brasov">Brasov</option>
        <option value="Constanta">Constanta</option>
      </select>
    </div>
  );
}
