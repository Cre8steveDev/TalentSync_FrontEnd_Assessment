/***
 * Benefits Component Housing the listed benefits of the product as well as example of the App in use
 */

import ButtonPry from "../Utilities/ButtonPry";
import ButtonSec from "../Utilities/ButtonSec";

const benefits = [
  "30 days free trial",
  "Cancel at any time",
  "Access to all features",
  "Personalized onboarding",
];

const Benefits = () => {
  return (
    <div className="w-screen flex flex-col xl:flex-row justify-between">
      {/* Left Container comes here */}
      <div className="w-full mx-auto flex justify-center xl:justify-end xl:mr-12">
        {/* Left Content Inner Container */}
        <section className="w-[579px] flex flex-col gap-12 items-center xl:items-start">
          <h2 className="md:text-[44px] font-bold md:leading-[50px] text-3xl text-center xl:text-left">
            Ready to clear the path to perfect Communication?
          </h2>

          {/* List out benefits  */}
          <ul className="flex flex-col items-center xl:items-start -mb-8 xl:-mb-0 ">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 mb-4 text-xl">
                <img
                  src="icons/check.png"
                  alt="✅"
                  className="w-[28px] h-[28px]"
                />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <section className="flex gap-3 mb-5 xl:mb-0">
            <ButtonSec text="Talk To Sales" />
            <ButtonPry text="Start Your Free Trial" />
          </section>
        </section>
      </div>

      {/*  Right Container comes here */}
      <div className="w-full flex justify-end relative">
        <img src="images/man_video.png" alt="" className="w-full" />

        {/* Pinging Button to fake recording */}
        <div className="w-[20px] h-[20px] bg-red-600 rounded-full z-[3] animate-ping absolute top-12 right-4 md:right-[80px]"></div>
        <div className="w-[16px] h-[16px] bg-red-600 rounded-full z-[3] absolute top-12 right-4 md:right-[82px]">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
