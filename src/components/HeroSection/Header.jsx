import ButtonPry from "../Utilities/ButtonPry";
import ButtonSec from "../Utilities/ButtonSec";
import LogoName from "../Utilities/LogoName";

/***
 * Header Component housing the navigation options and logo
 */
const Header = () => {
  return (
    <div className="w-full bg-white sticky top-0  mt-10 z-[6]">
      <header className="flex justify-between items-center bg-gray-100 py-[1rem] px-[2rem] rounded-[6.25rem] border-[1px] border-gray300 text-sm  w-full max-w-screen-xl mx-auto">
        {/* Logo and Name */}

        <LogoName />

        {/* Navigation Bar */}

        <nav className="flex items-center">
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

        {/* Call to Action Buttons  */}
        <section className="flex gap-2 ">
          <ButtonSec text="Talk To Sales" />
          <ButtonPry text="Start Your Free Trial" />
        </section>
      </header>
    </div>
  );
};

export default Header;
