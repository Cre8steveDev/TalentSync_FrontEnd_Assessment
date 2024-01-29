/***
 * Secondary Button: White Background
 */

// eslint-disable-next-line react/prop-types
const ButtonSec = ({ text }) => {
  return (
    <input
      type="button"
      value={text}
      className="px-[0.875rem] py-[0.9rem] rounded-[6.25rem] border-[1px] border-gray-400 bg-white text-xs font-bold hover:text-white hover:bg-slate-600 hover:border-slate-600 transition ease-in cursor-pointer w-[144px] text-gray-900"
    />
  );
};

export default ButtonSec;
