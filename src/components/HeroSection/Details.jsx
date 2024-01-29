/***
 * Details Component: Housing the main copy of the hero section
 */

import ButtonPry from "../Utilities/ButtonPry";
import ButtonTer from "../Utilities/ButtonTer";

const images = [
  "images/hero_img1.png",
  "images/hero_img2.png",
  "images/hero_img3.png",
  "images/hero_img4.png",
  "images/hero_img5.png",
  "images/hero_img6.png",
];

const icons = [
  { image: "icons/microphone.png", title: "Voice" },
  { image: "icons/video_call.png", title: "Video" },
  { image: "icons/screen.png", title: "Screen Share" },
  { image: "icons/smiley.png", title: "Reactions" },
  { image: "icons/message.png", title: "Messaging" },
  { image: "icons/setting.png", title: "Customization" },
];

// Definition of components
const Details = () => {
  //
  //

  return (
    <section className=" pt-[3rem] sm:pt-[8rem] w-full p-8 flex flex-col sm:flex-row justify-between gap-8">
      {/* Left Box here */}

      <div className="w-full flex flex-col gap-6 self-center ">
        <h1 className="text-gray-800 font-extrabold text-3xl xl:text-[3.3rem] lg:text-[2.4rem] text-center sm:text-left md:leading-[3.4rem]">
          <p className="">Uniting the world, </p>
          <p className="">one video call at a time</p>
        </h1>
        <p className="w-[100%] text-lg xl:text-2xl text-gray-500 sm:text-left text-center dark:text-black">
          Experience the future of communication with ClearLink - where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div className="flex gap-4 items-center justify-center sm:justify-start">
          {/*  */}
          <ButtonPry text="Start Your Free Trial" />
          {/* Tertiary Button */}
          <ButtonTer text="Discover AI assistant" />
        </div>

        <a href="#review">
          <img
            src="images/reviews.png"
            alt=""
            className="w-[50%] min-w-[250px] cursor-pointer mx-auto  sm:ml-0"
          />
        </a>
      </div>

      {/* Right hand side image */}
      <div className="w-full sm:w-[80%] flex flex-col justify-between items-center bg-blue-200 p-4 rounded-[1rem] shadow-2xl self-center dark:bg-slate-600">
        {/* Images and icons go here */}
        <div className="grid grid-cols-3 gap-3 ">
          {/* iterate over them to create */}
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="hover:saturate-200 transition ease-in hover:scale-125 hover:rotate-z-180"
            />
          ))}
        </div>

        {/* Featured icons */}
        <div className="w-[70%] mt-8">
          <div className="w-full grid grid-cols-6 gap-0">
            {/* Iterate over them to create */}
            {icons.map((icon, idx) => (
              <img
                key={idx}
                src={icon.image}
                title={icon.title}
                className="w-[2.75rem] hover:rotate-180  transition ease-out duration-100 hover:translate-y-1 cursor-default"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
