/***
 * The Footer Component; housing all major links of the website as well as navigation to social media platforms
 */

import LogoName from "../Utilities/LogoName.jsx";

// Define the String value of the footer links to avoid overcrowing the code with html

const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"];

const company = ["About Us", "Careers", "Press", "News", "Contact"];

const resources = ["Blog", "Events", "Help Centre", "Tutorials", "Support"];

const legal = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"];

// Define social media links in an array of objects
const socialMedia = [
  {
    image: "icons/linkedin.png",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/stephen-omoregie/",
  },
  {
    image: "icons/twitter.png",
    title: "Twitter (X)",
    url: "https://twitter.com/Cre8steveDev",
  },
  { image: "icons/facebook.png", title: "Facebook", url: "www.facebook.com" },
  {
    image: "icons/instagram.png",
    title: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    image: "icons/github.png",
    title: "GitHub",
    url: "https://github.com/Cre8steveDev",
  },
  {
    image: "icons/youtube.png",
    title: "Youtube",
    url: "https://www.youtube.com",
  },
];
// Component Definition Starts here

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col items-center">
      <div className="max-w-screen-xl w-full flex md:flex-row flex-col gap-12 mb-5 items-center md:items-start lg:p-3">
        {/* First Section */}
        <div className="flex w-full max-w-[350px] md:w-[50%] lg:w-full">
          <section className="w-full  flex flex-col items-center md:block ">
            <LogoName />
            <p className="mt-5 leading-7 text-center md:text-left">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </section>
        </div>

        {/* This is to ensure good responsiveness on the footer across different screen sizes */}
        {/* Second Section */}
        <div className="flex w-full ml-[40px] md:ml-0 ">
          {/* Products */}
          <ul className="w-full text-sm sm:text-md">
            <h3 className="text-sm">Product</h3>
            {product.map((product, idx) => (
              <li
                key={idx}
                title={product}
                className="text-gray-700 mt-4 font-bold hover:underline hover:opacity-85 transition ease-in cursor-pointer text-md"
              >
                {product}
              </li>
            ))}
          </ul>

          {/* Company */}
          <ul className="w-full text-sm sm:text-md">
            <h3 className="text-sm">Company</h3>
            {company.map((company, idx) => (
              <li
                key={idx}
                title={company}
                className="text-gray-700 mt-4 font-bold hover:underline hover:opacity-85 transition ease-in cursor-pointer text-md"
              >
                {company}
              </li>
            ))}
          </ul>

          {/* Resources */}
          <ul className="w-full text-sm sm:text-md">
            <h3 className="text-sm">Resources</h3>
            {resources.map((resources, idx) => (
              <li
                key={idx}
                title={resources}
                className="text-gray-700 mt-4 font-bold hover:underline hover:opacity-85 transition ease-in cursor-pointer text-md"
              >
                {resources}
              </li>
            ))}
          </ul>

          {/* Legal */}
          <ul className="w-full text-sm sm:text-md">
            <h3 className="text-sm">Legal</h3>
            {legal.map((legal, idx) => (
              <li
                key={idx}
                title={legal}
                className="text-gray-700 mt-4 font-bold hover:underline hover:opacity-85 transition ease-in cursor-pointer text-md"
              >
                {legal}
              </li>
            ))}
          </ul>

          {/* App Download Links Desktop */}
          <section className="w-full flex-col gap-4 hidden md:flex">
            <h3 className="font-bold text-blue-700 cursor-default">
              Get the app
            </h3>
            <img
              src="logos/appstore.png"
              alt="App Store"
              className="hover:brightness-125 hover:scale-125 transition ease-in"
            />
            <img
              src="logos/googleplay.png"
              alt="Google Play"
              className="hover:brightness-125 hover:scale-125 transition ease-in"
            />
          </section>
        </div>

        {/* App Download Mobile*/}
        <section className="w-full flex-col gap-4 sm:hidden flex">
          <h3 className="font-bold text-blue-700 cursor-default text-center">
            Get the app
          </h3>
          <img
            src="logos/appstore.png"
            alt="App Store"
            className="hover:brightness-125 hover:scale-125 transition ease-in max-w-[200px] mx-auto"
          />
          <img
            src="logos/googleplay.png"
            alt="Google Play"
            className="hover:brightness-125 hover:scale-125 transition ease-in max-w-[200px] mx-auto"
          />
        </section>
      </div>

      {/* Date and Social Links */}
      <section className=" w-full bg-gray-50 p-8 flex items-center justify-center">
        {/* Date and Developed by */}
        <div className="w-full max-w-screen-xl flex justify-between md:flex-row flex-col items-center md:items-start text-center md:text-left">
          <p className="mb-3 md:mb-0">
            (c) 2024 ClearLink. All rights reserved | Developed by Cre8steveDev
          </p>

          {/* Social Media Links */}
          <div className="flex gap-3">
            {socialMedia.map((plat, idx) => (
              <a key={idx} href={plat.url} rel="noreferrer" target="_blank">
                <img
                  src={plat.image}
                  alt={plat.title}
                  title={plat.title}
                  className="w-[1.5rem] h-[1.5rem] hover:brightness-120 hover:scale-125 transition ease-in"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
