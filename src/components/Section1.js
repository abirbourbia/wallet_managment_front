// Section1.js
import React from "react";
import { Link } from 'react-scroll';
import logo from "./../assets/logo.png"; // Import your logo image
import lighting from "./../assets/light.png"; 
function Section1() {
  return (
    <section
    id="section1"
    className="h-screen bg-black text-white flex justify-center items-center"
    style={{
      backgroundImage: `url(${lighting})`,
      backgroundPosition: "right",  // Position the image on the right
      backgroundSize: "cover",      // Cover the entire section with the image
      backgroundRepeat: "no-repeat" // Prevent the image from repeating
    }}
  >      <div className="flex justify-between items-center w-full px-8">
        {/* Left Column: Text and Button */}
        <div className="w-2/3">
          <h2 className="text-4xl font-bold mb-4 mr-10 ml-6">Deviens riche avec Wallet</h2>
          <p className="text-lg mb-6 mr-10 ml-6 font-bold">
          Investissez intelligemment, croissez régulièrement votre chemin vers une prospérité passive.
          Prenez le contrôle de vos finances et laissez votre argent travailler pour vous.           
          </p>
          <Link to="section2" smooth={true} duration={500}>
          <button
          className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg mr-10 ml-6 hover:bg-[#A3D500] transition font-bold">
          Commencer une simulation
          </button>
          </Link>
        </div>

        {/* Right Column: Image (Logo) */}
        <div className="w-1/2">
          <img src={logo} alt="Logo" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
