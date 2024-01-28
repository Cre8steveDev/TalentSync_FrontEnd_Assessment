/***
 * The Footer Component; housing all major links of the website as well as navigation to social media platforms
 */

import LogoName from "../Utilities/LogoName.jsx";

// Define the String value of the footer links to avoid overcrowing the code with html

const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"];

const company = ["About Us", "Careers", "Press", "News", "Contact"];

const resources = ["Blog", "Events", "Help Centre", "Tutorials", "Support"];

const legal = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"];

// Component Definition Starts here

const Footer = () => {
  return (
    <div>
      {/* First Section */}
      <div>
        <section>
          <LogoName />
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </section>
        <ul>
          <h3>Product</h3>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
