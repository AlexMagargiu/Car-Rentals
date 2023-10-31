import { useState } from "react";
import { questionData } from "../questionData";
import Accordion from "./FAQ-Components/Accordion";

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  function handleAccordionClick(index) {
    if (index === openAccordion) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  }

  return (
    <section className="flex flex-col items-center pb-28 max-w-screen-xl mx-auto px-6 gap-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <h4 className="text-3xl font-bold">FAQ</h4>
        <h2 className="text-5xl font-bold leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg max-w-[13.25rem]">
          Answers to common concerns and inquiries
        </p>
      </div>
      <div className="shadow-[0_5px_30px_0_rgba(0,0,0,0.35)]">
        {questionData.map((data, id) => (
          <Accordion
            key={id}
            question={data.question}
            answer={data.answer}
            isOpen={id === openAccordion}
            toggleAccordion={() => handleAccordionClick(id)}
          />
        ))}
      </div>
    </section>
  );
}
