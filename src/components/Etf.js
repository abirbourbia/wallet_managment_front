import React, { useState } from "react";

const Etf = ({ listActifs, setListActifs }) => {
  const [currentInput, setCurrentInput] = useState(""); // Stores the current ETF input
  const [currentPercentage, setCurrentPercentage] = useState(""); // Stores the current percentage input

  const handleSaveInput = (e) => {
    if (currentInput.trim() && currentPercentage.trim()) {
      const newEtf = {
        etf: currentInput.toUpperCase(),
        percentage: parseFloat(currentPercentage),
      };
      setListActifs([...listActifs, newEtf]);
      setCurrentInput(""); // Clear ETF input
      setCurrentPercentage(""); // Clear percentage input
    }
  };

  const handleDeleteInput = (indexToDelete) => {
    setListActifs(listActifs.filter((_, index) => index !== indexToDelete)); // Remove the selected ETF
  };

  return (
    <div className="block mb-4">
      <label className="block text-lg font-bold mb-2 text-white">
        Sélectionnez vos ETF (Exchange-Traded Funds):
      </label>
      <input
        type="text"
        className="p-2 w-full rounded text-black mb-2"
        placeholder="Ex: TSLA, NVDA, AMZN"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
      />

      <label className="block text-lg font-bold mb-2 text-white">
        Pourcentage pour cet ETF:
      </label>
      <input
        type="number"
        className="p-2 w-full rounded text-black mb-2"
        placeholder="Ex: 10"
        value={currentPercentage}
        onChange={(e) => setCurrentPercentage(e.target.value)}
      />

      <button
        type="button"
        className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg mt-4 hover:bg-[#A3D500] transition"
        onClick={() => {handleSaveInput()}}
      >
        Ajouter l'ETF
      </button>

      {listActifs.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold text-white">Vos ETFs :</p>
          <div className="flex flex-wrap gap-2 text-white">
            {listActifs.map((input, index) => (
              <span
                key={index}
                className="bg-gray-700 py-1 px-3 rounded-lg flex items-center"
              >
                {input.etf} ({input.percentage}%)
                <button
                  type="button"
                  className="ml-2 text-red-400 hover:text-red-600 font-bold"
                  onClick={() => handleDeleteInput(index)}
                >
                  X
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Etf;
