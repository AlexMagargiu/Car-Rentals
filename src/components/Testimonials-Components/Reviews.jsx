import { FaQuoteRight } from "react-icons/fa";

export default function Reviews(props) {
  return (
    <div className="bg-white py-12 px-6 flex flex-col gap-8 max-w-lg lg:px-12">
      <p className="text-2xl">"{props.quote}"</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={props.img}
            className="w-16 h-16 p-2 rounded-full border-4 border-secondary_text"
          ></img>
          <div>
            <p className="font-bold text-xl">{props.name}</p>
            <p className="font-bold">{props.location}</p>
          </div>
        </div>
        <FaQuoteRight className="hidden sm:block text-4xl text-secondary_text" />
      </div>
    </div>
  );
}
