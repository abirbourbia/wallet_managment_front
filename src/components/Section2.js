import React, { useState , useEffect} from "react";
import line from "./../assets/line.png"; 
import axios from 'axios';
import Etf from "./Etf";
import Plot from 'react-plotly.js';
import '../App.css';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register all necessary components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function Section2() {
  const [plotData, setPlotData] = useState(null);
  const [statsData, setStatsData] = useState(null);

  const [dateDebut, setDateDebut] = useState('2012-12-12');
  const [dateFin, setDateFin] = useState('2024-12-12');
  const [frequenceContributions, setFrequenceContributions] = useState('monthly');

  const [investInit, setInvestInit] = useState(20000);
  const [investRecu, setInvestRecu] = useState(1000);
  const [fraisGestion, setFraisGestion] = useState(50);

  const [listActifs, setListActifs] = useState([]);

  const fetch_data = () => {
    const query_params = {
      "dateDebut": dateDebut,
      "dateFin": dateFin,
      "investInit": investInit,
      "investRecu": investRecu,
      "listActifs": listActifs,
      "fraisGestion": fraisGestion,
      "frequenceContributions": frequenceContributions,
    };

    axios.post('http://localhost:5000/get_all_data', query_params)
      .then((result) => {
        if (result.data.success === 'true') {
          if (result.data.json_figures) {
            const json_figures = Object.fromEntries(
              Object.entries(result.data.json_figures).map(([key, value]) => [key, JSON.parse(value)])
            );
            setPlotData(json_figures);
          }

          // Handle df_stats
          if (result.data.df_stats) {
            setStatsData(result.data.df_stats);
          }
        } else {
          console.log("Error while fetching the data");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const get_figures = () => {
    if (plotData != null) {
      return (
        <div className="w-75 d-flex flex-column">
          {Object.entries(plotData).map(([plot_name, plot]) => (
            <Plot
              key={plot_name}
              data={plot.data}
              layout={plot.layout}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  const get_stats = () => {
    if (statsData != null) {
      const statLabels = {
        0: "Volatilite Mensuelle",
        1: "Volatilite Annuelle",
        2: "CAGR",
        3: "Ratio Sharpe"
      };
      return (
        <div className="stats-container">
          <h2 className="text-3xl font-bold">Performance</h2>
          <div className="flex justify-center mt-2">
            <img 
              src={line} // Replace this with the actual image path
              alt="Decorative Line"
              className="w-30 py-0"
            />
          </div>
          <div className="stats-grid">
            {Object.entries(statsData).map(([statName, statValue], index) => (
              <div key={index} className="stat-card"> 
                <h4 className="text-black" >{statLabels[index]}</h4> 
                <p className="text-black">{Object.values(statValue)[index]}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  
  // Function to calculate date difference in years
  const calculateYearsDifference = () => {
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInYears = diffInTime / (1000 * 3600 * 24 * 365.25); // 365.25 to account for leap years
    return diffInYears.toFixed(2); // rounding to two decimal places
  };

  const calculateInvestment = () => {
    const totalInvestment = investInit + (investRecu * calculateYearsDifference() / 1000);
    return totalInvestment;
  };

  return (
    <section id="section2" className="py-16 bg-black text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mon Portefeuille</h2>
        <div className="flex justify-center mt-2">
          <img
            src={line} // Replace this with the actual image path
            alt="Decorative Line"
            className="w-30 py-0"
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col space-y-8">
        <form>
          <label className="block mb-4">
            Montant initial d’investissement (€)
            <input
              type="number"
              value={investInit}
              id="portfolio_form_invest_init"
              onChange={(e) => setInvestInit(e.target.value)}
              className="mt-2 p-2 w-full rounded text-black"
            />
          </label>
          <label className="block mb-4">
            Montant des contributions récurrentes (€)
            <input
              type="number"
              value={investRecu}
              id="portfolio_form_invest_recu"
              onChange={(e) => setInvestRecu(e.target.value)}
              className="mt-2 p-2 w-full rounded text-black"
              placeholder="Ex: 100"
            />
          </label>
          <label className="block mb-4">
            Fréquence des contributions
            <select
              value={frequenceContributions}
              onChange={(e) => setFrequenceContributions(e.target.value)}
              className="mt-2 p-2 w-full rounded text-black"
            >
              <option value="monthly">Mois</option>
              <option value="quarterly">Trimestre</option>
              <option value="yearly">Année</option>
            </select>
          </label>
          <label className="block mb-4 ">
            Date début d’investissement
            <input
              type="date"
              className="mt-2 p-2 w-full rounded text-black"
              id="portfolio_form_date_debut" 
              value={dateDebut} 
              onChange={(e) => setDateDebut(e.target.value)}
            />
          </label>
          <label className="block mb-4 ">
            Date fin d’investissement
            <input
              type="date"
              className="mt-2 p-2 w-full rounded text-black"
              id="portfolio_form_date_fin" 
              value={dateFin} 
              onChange={(e) => setDateFin(e.target.value)}
            />
          </label>
          <label className="block mb-4">
            Frais de gestion annuels (€)
            <input
              type="number"
              className="mt-2 p-2 w-full rounded text-black"
              id="portfolio_form_frais_gestion" 
              value={fraisGestion} 
              onChange={(e) => setFraisGestion(e.target.value)}
            />
          </label>
          <Etf listActifs={listActifs} setListActifs={setListActifs} />              
          <button
            type="button"
            className="bg-[#CFFF24] text-black py-2 px-6 rounded-lg mt-4 hover:bg-[#A3D500] transition font-bold w-full"
            onClick={() => {
              console.log("fetching");
              fetch_data();
            }}
          >
            Commencer L'analyse
          </button>
        </form>
        <div className="w-full max-w-xl text-center">
          {get_figures()}
          {get_stats()}
        </div>
      </div>
    </section>
  );
}

export default Section2;
