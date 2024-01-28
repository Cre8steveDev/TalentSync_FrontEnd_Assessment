/***
 * App Component Housing all other UI Components of the Website
 */

import WhyClearLink from "./components/WhyClearLink/WhyClearLink.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import ReviewSection from "./components/ReviewSection/ReviewSection.jsx";
import Faqs from "./components/FAQs/FAQS.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/HeroSection/Header.jsx";

// Definition of App Component begins
function App() {
  return (
    <div className="w-full px-[8rem] bg-white dark:bg-slate-900 font-[Inter] flex flex-col items-center gap-12">
      <Header />
      <HeroSection />
      <WhyClearLink />
      <ReviewSection />
      <Faqs />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
