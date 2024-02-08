import { FaEnvelopeOpen } from "react-icons/fa6";
import { useState } from "react";
import { insertFeedback } from "../../../MongoDB";
import axios from "axios";

export default function ContactFrom() {
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    insertFeedback({ user: inputs });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="name" className="font-bold">
        Full Name <span className="text-secondary_text">*</span>
      </label>
      <input
        className="px-8 py-4 bg-gray-200"
        type="text"
        name="name"
        placeholder="John Doe"
        required
        onChange={handleChange}
      ></input>
      <label htmlFor="email" className="font-bold">
        Email <span className="text-secondary_text">*</span>
      </label>
      <input
        className="px-8 py-4 bg-gray-200"
        type="email"
        name="email"
        placeholder="youremail@example.com"
        required
        onChange={handleChange}
      ></input>
      <label htmlFor="message" className="font-bold">
        Tell us about <br /> your experience{" "}
        <span className="text-secondary_text">*</span>
      </label>
      <textarea
        className="px-8 py-4 bg-gray-200"
        placeholder="Write Here..."
        name="message"
        rows="6"
        required
        onChange={handleChange}
      ></textarea>
      <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg text-white bg-secondary_text rounded-xl">
        <FaEnvelopeOpen />
        Send Messag
      </button>
    </form>
  );
}
