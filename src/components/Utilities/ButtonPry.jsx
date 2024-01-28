/***
 * Primary Button: Blue Background
 */

// eslint-disable-next-line react/prop-types
const ButtonPry = ({ text }) => {
  return (
    <input
      type="button"
      value={text}
      className="px-[0.875rem] py-[0.9rem] rounded-[6.25rem] bg-blue700 text-white text-xs font-bold border-0 hover:text-white hover:bg-green-600 transition ease-in cursor-pointer w-[195px]"
    />
  );
};

export default ButtonPry;
