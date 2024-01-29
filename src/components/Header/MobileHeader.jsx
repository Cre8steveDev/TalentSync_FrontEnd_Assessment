// Mobile Header Menu

import { useState } from "react";
import ButtonPry from "../Utilities/ButtonPry.jsx";
import ButtonSec from "../Utilities/ButtonSec.jsx";

// definition of Component
const MobileHeader = () => {
  const [viewMenu, setViewMenu] = useState(false);

  const handleViewMenu = () => {
    setViewMenu((state) => !state);
  };
  return (
    <div className="lg:hidden">
      <img
        src={viewMenu ? "icons/shrink.png" : "icons/expand.png"}
        alt="Menu"
        className=" cursor-pointer hover:scale-90 transition ease-in"
        onClick={handleViewMenu}
      />

      {/* Define the full screen menu */}
      {viewMenu && (
        <div className="absolute w-screen h-screen bg-gray-900 top-0 left-0 dark:gray- bg-opacity-90 backdrop-blur-sm p-5 flex flex-col items-center justify-center">
          {/* Place Button to close menu */}
          <div>
            <img
              src={viewMenu ? "icons/shrink.png" : "icons/expand.png"}
              alt="Menu"
              className=" cursor-pointer hover:scale-90 transition ease-in"
              onClick={handleViewMenu}
            />
          </div>

          {/* Insert Navigation Options and Button */}
          <nav className="flex flex-col items-center" onClick={handleViewMenu}>
            <ul className="flex flex-col items-center gap-5 justify-center my-8 text-3xl font-bold text-slate-50">
              <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer ">
                <p>Products</p>
                <img
                  src="icons/dropdown.png"
                  alt="^"
                  className="w-[18px] h-[18px] hidden"
                />
              </li>

              {/*  */}
              <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer ">
                <p>Solutions</p>
                <img
                  src="icons/dropdown.png"
                  alt="^"
                  className="w-[18px] h-[18px] hidden"
                />
              </li>

              {/*  */}
              <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer ">
                <p>Resources</p>
                <img
                  src="icons/dropdown.png"
                  alt="^"
                  className="w-[18px] h-[18px] hidden"
                />
              </li>

              {/*  */}
              <li className="flex gap-1 items-center hover:opacity-70 cursor-pointer ">
                <p>Pricing</p>
              </li>
            </ul>
          </nav>

          {/* Call to Action Buttons  */}
          <section
            className="flex flex-col items-center gap-2 "
            onClick={handleViewMenu}
          >
            <ButtonSec text="Talk To Sales" />
            <ButtonPry text="Start Your Free Trial" />
          </section>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
