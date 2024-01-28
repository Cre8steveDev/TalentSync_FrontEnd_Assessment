/***
 * Header Component housing the navigation options and logo
 */
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-100 py-[1rem] px-[2rem] rounded-[6.25rem] border-[1px] border-gray300 text-sm">
      {/* Logo and Name */}

      <a href="/">
        <div className="flex items-center gap-1 h-[1.75rem] cursor-pointer hover:opacity-80 transition ease-in">
          <img
            src="logos/clearlink.png"
            alt="Logo"
            className="w-[18.38px] h-[19px]"
          />
          <h2 className="text-gray900 text-xl font-bold">
            ClearLink<span className=" text-bluedark400">.</span>
          </h2>
        </div>
      </a>

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
        <input
          type="button"
          value="Talk to Sales"
          className="px-[0.875rem] rounded-[6.25rem] border-[1px] border-gray-300 bg-white text-xs font-bold hover:text-white hover:bg-orange-400 hover:border-orange-400 transition ease-in cursor-pointer"
        />
        <input
          type="button"
          value="Sign up for free"
          className="px-[0.875rem] py-[0.9rem] rounded-[6.25rem] bg-blue700 text-white text-xs font-bold border-0 hover:text-white hover:bg-green-600 transition ease-in cursor-pointer"
        />
      </section>
    </header>
  );
};

export default Header;
