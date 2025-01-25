import React from "react";
import Path from "./../assets/shortLogo.png";  // Import the image correctly
import lighting from "./../assets/light.png"; 

function Header() {
  return (
   

<header
   
    className=" bg-black text-white fixed top-0 left-0 w-full z-10"
    style={{
      backgroundImage: `url(${lighting})`,
      backgroundPosition: "right",  // Position the image on the right
      backgroundSize: "cover",      // Cover the entire section with the image
      backgroundRepeat: "no-repeat" // Prevent the image from repeating
    }}
  >  


      <nav className="flex justify-between items-center py-3 px-8">
        {/* Logo on the left */}
        <div className="text-lg font-bold">
          <a href="#home">
            <img src={Path} alt="Logo" className="h-12" /> {/* Use the imported Path variable */}
          </a>
        </div>
        
        {/* Links on the right */}
        <div className="flex space-x-8">
          <a href="#section1" className="hover:text-[#CFFF24] font-bold">Accueil</a>
          <a href="#section2" className="hover:text-[#CFFF24] font-bold">Mon Portefeuille</a>
          <a href="#section3" className="hover:text-[#CFFF24] font-bold">Guide</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
