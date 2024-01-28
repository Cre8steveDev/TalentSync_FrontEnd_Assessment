/***
 * Secondary Button: White Background
 */

// eslint-disable-next-line react/prop-types
const ButtonSec = ({ text }) => {
  return (
    <input
      type="button"
      value={text}
      className="px-[0.875rem] py-[0.9rem] rounded-[6.25rem] border-[1px] border-gray-300 bg-white text-xs font-bold hover:text-white hover:bg-orange-400 hover:border-orange-400 transition ease-in cursor-pointer w-[144px]"
    />
  );
};

export default ButtonSec;
