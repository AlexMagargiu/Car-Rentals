import { FaXmark } from "react-icons/fa6";

export default function ErrorMessage(props) {
  return (
    <div className="flex justify-between items-center bg-error text-secondary_text w-full p-2 mb-3 rounded-md">
      {props.title} <FaXmark onClick={props.onClick} />
    </div>
  );
}
