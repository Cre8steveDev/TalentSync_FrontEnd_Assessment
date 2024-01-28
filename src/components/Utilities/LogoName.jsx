/***
 * Utility for the logo and name of the Company
 */

const LogoName = () => {
  return (
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
  );
};

export default LogoName;
