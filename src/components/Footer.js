import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-8">
    <br></br>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Wallet Logo" className="h-12 w-auto" />
        </div>
        {/* Right Section: Information and Icons */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm mb-4">
            Made by <span className="text-[#CFFF24]">Bourbia Abir</span> &{" "}
            <span className="text-[#CFFF24]">Bentaleb Fanel</span>
          </p>
        </div>
      </div>
      {/* Bottom Centered Section */}
      <p className="text-sm text-center mt-6">© 2025 Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
