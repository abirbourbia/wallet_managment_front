import React from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
