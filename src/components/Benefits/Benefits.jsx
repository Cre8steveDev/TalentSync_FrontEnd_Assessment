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
    <div className="w-screen flex flex-col sm:flex-row justify-between">
      {/* Left Container comes here */}
      <div className="w-full mx-auto bg-red-500">
        <section>
          <h2>Ready to clear the path to perfect Communication?</h2>

          {/* List out benefits  */}
          <ul>
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <img src="icons/check.png" alt="✅" />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <section className="flex gap-3">
            <ButtonSec text="Talk To Sales" />
            <ButtonPry text="Start Your Free Trial" />
          </section>
        </section>
      </div>
      {/*  Right Container comes here */}
      <div className="w-full flex justify-end">
        <img src="images/man_video.png" alt="" />
      </div>
    </div>
  );
};

export default Benefits;
