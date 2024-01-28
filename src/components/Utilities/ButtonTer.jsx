/***
 * Transparent Background Button Component
 */

// eslint-disable-next-line react/prop-types
const ButtonTer = ({ text }) => {
  return (
    <button className="flex text-sm font-medium items-center gap-2 hover:opacity-70 transition ease-in">
      <img src="icons/bot.png" className="w-[20px]" />
      <p>{text}</p>
    </button>
  );
};

export default ButtonTer;
