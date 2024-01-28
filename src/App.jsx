/***
 * App Component Housing all other UI Components of the Website
 */

import WhyClearLink from "./components/WhyClearLink/WhyClearLink.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";

// Definition of App Component begins
function App() {
  return (
    <div className="w-full h-screen px-[8rem] bg-white dark:bg-slate-900 font-[Inter] flex flex-col items-center">
      <HeroSection />
      <WhyClearLink />
    </div>
  );
}

export default App;
