import { useState } from "react";

export default function Accordion(props) {
  return (
    <div onClick={props.toggleAccordion}>
      <div className="flex items-center gap-4 justify-between w-full border-b-2 border-border_faq px-8 py-6 lg:px-12">
        <p className="text-xl">{props.question}</p>
        <span className="font-bold text-xl">{props.isOpen ? "-" : "+"}</span>
      </div>
      {props.isOpen && (
        <div>
          <p className="px-8 py-6 border-b-2 border-border_faq">
            {props.answer}
          </p>
        </div>
      )}
    </div>
  );
}
