/**
 * Main Hero Section holding the other sub components of the header and details
 */

// Import Components
import Details from "./Details.jsx";
import Header from "./Header.jsx";
import Companies from "./Companies.jsx";

// Component Definition starts here
const HeroSection = () => {
  return (
    <main className=" pt-10 h-screen relative max-w-screen-xl">
      <Header />
      <Details />
      <Companies />
    </main>
  );
};

export default HeroSection;
