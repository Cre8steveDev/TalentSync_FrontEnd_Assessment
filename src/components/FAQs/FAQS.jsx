/**
 *
 * Frequently Asked Questions
 */

// Define Frequently asked questions in an array for cleaner code in rendering
// import React useStateHook
import { useState } from "react";

const questions = [
  {
    question: "How many Participants can join a ClearLink Video Conference?",
    answer:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs",
  },
  {
    question: "Can I use ClearLink on multiple devices?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia molestias! Quibusdam commodi ad perferendis sit quis assumenda velit blanditiis officiis modi eaque praesentium animi, minima, deleniti quia ut ipsa deserunt. Unde distinctio, repellendus et at enim beatae consequuntur.",
  },
  {
    question:
      "Is ClearLink compatible with other video conferencing platforms?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia molestias! Quibusdam commodi ad perferendis sit quis assumenda velit blanditiis officiis modi eaque praesentium animi, minima, deleniti quia ut ipsa deserunt. Unde distinctio, repellendus et at enim beatae consequuntur.",
  },
  {
    question: "How does ClearLink ensure the security of my video conferences?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia molestias! Quibusdam commodi ad perferendis sit quis assumenda velit blanditiis officiis modi eaque praesentium animi, minima, deleniti quia ut ipsa deserunt. Unde distinctio, repellendus et at enim beatae consequuntur.",
  },
  {
    question: "Do I need to download any software to use ClearLink?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia molestias! Quibusdam commodi ad perferendis sit quis assumenda velit blanditiis officiis modi eaque praesentium animi, minima, deleniti quia ut ipsa deserunt. Unde distinctio, repellendus et at enim beatae consequuntur.",
  },
  {
    question: "What kind of customer support does ClearLink provide?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus mollitia molestias! Quibusdam commodi ad perferendis sit quis assumenda velit blanditiis officiis modi eaque praesentium animi, minima, deleniti quia ut ipsa deserunt. Unde distinctio, repellendus et at enim beatae consequuntur.",
  },
];

const Faqs = () => {
  // State for opening and closing
  const [open, setOpen] = useState(0);

  const handleOpenFaq = (idx) => {
    if (open === idx) {
      setOpen(null);
      return;
    }
    setOpen(idx);
  };

  //   Return JSX to dom
  return (
    <div className="flex max-w-screen-xl gap-20 mt-20">
      {/* Left Container */}
      <div className="w-full flex flex-col gap-3">
        <p className="font-bold text-blue-700">Support</p>
        <h3 className="text-5xl font-extrabold">FAQs</h3>
        <p className="text-2xl">
          Everything you need to know about the product and billing. Can&apos;t
          find the answer you&apos;re looking for? Please{" "}
          <span className=" underline cursor-pointer hover:text-blue-600">
            chat with our friendly team
          </span>
        </p>
      </div>

      {/* Right Container  */}
      <div className="w-full">
        {questions.map((question, idx) => {
          return (
            <section
              key={idx}
              className={`${
                open === idx ? "bg-gray-200" : "bg-white"
              } px-[1.5rem] pb-4 rounded-2xl`}
            >
              <div className="h-[80px] flex justify-between items-center">
                <h3
                  className="font-semibold cursor-pointer"
                  onClick={() => handleOpenFaq(idx)}
                >
                  {question.question}
                </h3>
                <img
                  src={open === idx ? "icons/shrink.png" : "icons/expand.png"}
                  alt=""
                  className="w-[24px] h-[26px] hover:scale-110"
                  onClick={() => handleOpenFaq(idx)}
                />
              </div>
              <p
                className={`${
                  open === idx ? "block" : "hidden"
                } text-md w-[90%] -mt-3`}
              >
                {question.answer}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
