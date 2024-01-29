import ButtonPry from "../Utilities/ButtonPry";
import ButtonSec from "../Utilities/ButtonSec";
import LogoName from "../Utilities/LogoName";
import MobileHeader from "./MobileHeader";
import { useEffect, useState } from "react";

/***
 * Header Component housing the navigation options and logo
 */
const Header = () => {
  const [lightMode, setLightMode] = useState(true);

  //employ useEffect to add property on html tag
  useEffect(() => {
    const htmlTag = document.querySelector("html");

    if (lightMode === true) {
      htmlTag.classList.remove("dark");
    } else {
      htmlTag.classList.add("dark");
    }
  }, [lightMode]);

  return (
    <div className="w-screen bg-white dark:bg-slate-400 dark:text-white sticky top-0  mt-10 z-[6]">
      <header className="flex justify-between items-center bg-gray-100 py-[1rem] px-[2rem] rounded-[6.25rem] border-[1px] border-gray300 text-sm  w-full max-w-screen-xl mx-auto dark:bg-gray-800">
        {/* Logo and Name */}

        <LogoName />

        {/* Navigation Bar */}

        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-8 justify-center">
            <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer">
              <p>Products</p>
              <img
                src="icons/dropdown.png"
                alt="^"
                className="w-[18px] h-[18px]"
              />
            </li>

            {/*  */}
            <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer">
              <p>Solutions</p>
              <img
                src="icons/dropdown.png"
                alt="^"
                className="w-[18px] h-[18px]"
              />
            </li>

            {/*  */}
            <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer">
              <p>Resources</p>
              <img
                src="icons/dropdown.png"
                alt="^"
                className="w-[18px] h-[18px]"
              />
            </li>

            {/*  */}
            <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer">
              <p>Pricing</p>
            </li>
          </ul>
        </nav>

        {/* Light and Dark Mode */}
        <div className="w-[30px]">
          <img
            src={lightMode ? "icons/dark.png" : "icons/light.png"}
            alt={lightMode ? "Dark" : "Light"}
            className=""
            onClick={() => setLightMode(!lightMode)}
          />
        </div>

        {/* Call to Action Buttons  */}
        <section className="hidden lg:flex gap-2 ">
          <ButtonSec text="Talk To Sales" />
          <ButtonPry text="Start Your Free Trial" />
        </section>

        {/* Mobile Header Comes here */}
        <MobileHeader />
      </header>
    </div>
  );
};

export default Header;
