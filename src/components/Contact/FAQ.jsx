import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How soon do you respond?",
    answer: "Usually within 24 hours.",
  },
  {
    question: "Do you provide free consultation?",
    answer: "Yes, absolutely.",
  },
  {
    question: "Can you redesign my website?",
    answer: "Yes. We redesign and optimize websites.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, Local SEO and Global SEO.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            FAQ
          </span>

          <h2 className="mt-6 text-2xl  font-semibold md:text-3xl lg:text-4xl">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-yellow-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>

                <ChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-500">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
