/***
 * Why ClearLink Component
 */
// Benefits array containing icons and details

const benefits = [
  {
    image: "icons/video_call.png",
    title: "Crystal-clear HD video",
    description:
      "No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings",
  },
  {
    image: "icons/speech.png",
    title: "Noise-cancelling audio",
    description:
      "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations",
  },
  {
    image: "icons/date.png",
    title: "Scheduling made easy",
    description:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place",
  },
  {
    image: "icons/security.png",
    title: "Bank-grade security",
    description:
      "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders",
  },
];

// Component Definition starts here
const WhyClearLink = () => {
  return (
    <div className="w-full max-w-screen-xl">
      <section className="flex flex-col gap-2 relative">
        <p className="text-sm font-bold text-blue-700">
          The ClearLink Advantage
        </p>
        <h2 className="text-gray-900 font-bold text-4xl">
          Why Choose ClearLink?
        </h2>
        <p className="w-[70%] text-xl">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>

        <img src="images/line.png" className="absolute right-6" />
      </section>

      {/* Container for services and picture */}
      <div className=" mt-[60px] flex gap-8">
        <section className="flex flex-wrap justify-between w-[60%] gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="w-[45%] flex flex-col gap-2">
              <img
                src={benefit.image}
                className="hover:scale-125 transition ease-in w-[46px]"
              />
              <h2 className="font-semibold text-xl">{benefit.title}</h2>

              <p className="text-sm">{benefit.description}</p>
            </div>
          ))}
        </section>

        <section className="w-[40%]">
          <img src="images/choose_images.png" alt="" />
        </section>
      </div>
    </div>
  );
};

export default WhyClearLink;
