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
    <div className="w-full max-w-screen-xl my-12 sm:my-0 text-gray-800">
      <section className="flex flex-col gap-2 relative mt-[70px] sm:-mt-20 text-center md:text-left">
        <p className="text-sm font-bold text-blue-700">
          The ClearLink Advantage
        </p>
        <h2 className="font-bold text-4xl">Why Choose ClearLink?</h2>
        <p className="md:w-[60%] text-xl">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>

        <img
          src="images/line.png"
          className="hidden sm:absolute right-[179px] -top-5 md:block"
        />
      </section>

      {/* Container for services and picture */}
      <div className=" mt-[60px] flex md:flex-row flex-col gap-8">
        <section className="flex sm:flex-row flex-col flex-wrap justify-between md:w-[60%] ">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="sm:w-[45%] flex flex-col gap-4 items-center md:items-start sm:mt-3"
            >
              <img
                src={benefit.image}
                className="hover:scale-125 transition ease-in w-[46px]"
              />
              <h2 className="font-semibold text-xl xl:text-2xl">
                {benefit.title}
              </h2>

              <p className="text-sm xl:text-lg text-center md:text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </section>

        <section className="w-full md:w-[40%] self-center">
          <img src="images/choose_images.png" alt="" className="w-full" />
        </section>
      </div>
    </div>
  );
};

export default WhyClearLink;
