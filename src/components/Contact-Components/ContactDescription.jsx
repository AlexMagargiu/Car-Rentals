import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa6";

export default function ContactDescription() {
  return (
    <section className="flex flex-col items-center gap-8 lg:items-start lg:w-full">
      <h1 className="text-4xl font-bold lg:text-5xl">
        Need additional information?
      </h1>
      <p className="w-64 opacity-60 lg:w-96">
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>
      <div className="flex flex-col items-center justify-center gap-6 text-xl lg:items-start">
        <p className="flex items-center justify-center gap-2 lg:gap-4">
          <FaPhone /> 0712 345 678
        </p>
        <p className="flex items-center justify-center gap-2 lg:gap-4">
          <FaEnvelope /> carrental@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2 lg:gap-4">
          <FaPaperPlane /> Bucharest, Romania
        </p>
      </div>
    </section>
  );
}
