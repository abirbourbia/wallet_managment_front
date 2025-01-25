import React from "react";
import line from "./../assets/line.png"; 


function Section3() {
  return (
    <section
      id="section3"
      className="py-16 bg-black text-white flex flex-col items-center justify-center bg-black text-white px-8">
      <h2 className="text-3xl font-bold">Guide: Comment fonctionne Wallet ?</h2>
                <div className="flex justify-center mt-2">
                  <img
                    src={line} // Replace this with the actual image path
                    alt="Decorative Line"
                    className="w-30 py-0"
                  />
                </div>
    
      
      <p className="text-lg mb-8 text-center max-w-3xl">
        Wallet vous aide à simuler un portefeuille d'investissement à long
        terme. Fournissez simplement les données nécessaires, et Wallet vous
        affichera des analyses détaillées et des prédictions sur vos
        investissements.
      </p>
      <div className="space-y-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            1. Saisissez vos informations
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl">
            Indiquez des détails tels que la{" "}
            <span className="font-semibold">date de début</span>, la{" "}
            <span className="font-semibold">date de fin</span>, le{" "}
            <span className="font-semibold">montant initial</span>, le{" "}
            <span className="font-semibold">montant récurrent</span>, et la{" "}
            <span className="font-semibold">récurrence</span> (mensuelle,
            annuelle, semestrielle, etc.). et les {""}
            <span className="font-semibold">frais de gestion.</span>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            2. Ajoutez vos ETFs et leur répartition
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl">
            Spécifiez les <span className="font-semibold">ETFs</span> que vous
            souhaitez inclure ainsi que leur{" "}
            <span className="font-semibold">allocation en pourcentage</span>{" "}
            dans votre portefeuille (leur somme doit etre egale à 100%).
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            3. Analysez votre portefeuille
          </h2>
            Avec un seul clique, consultez des graphiques et des données comme :
            <br></br>
            <ul className="list-disc mt-4 mx-auto inline-block text-left">
              <li>Évolution des rendements par actif</li>
              <li>Distribution des rendements</li>
              <li>Performance cumulée</li>
              <li>Mesures financières</li>
              <li>Régression linéaire pour les prévisions</li>
            </ul>
        </div>
        {/* Ajout des explications sur les calculs des ratios */}
        <div>
          <h2 className="text-2xl font-semibold text-[#CFFF24] mb-8">
            4. Calculs financiers
          </h2>
          <p className="text-lg mb-8 text-center max-w-3xl">
            Voici comment sont calculés deux des ratios financiers les plus importants :
          </p>
          <div className="text-lg max-w-3xl mx-auto">
            <h3 className="font-semibold text-[#CFFF24]">1. Ratio de Sharpe</h3>
            <p>
              Le ratio de Sharpe mesure la rentabilité ajustée au risque d'un
              investissement. Il est calculé en divisant la différence entre le
              rendement de l'investissement et le taux sans risque par la
              volatilité de l'investissement. Plus le ratio de Sharpe est élevé,
              plus l'investissement est considéré comme performant par rapport à
              son risque.
            </p>
            <p className="font-semibold">
              Formule : 
              <span className="text-[#fff]"> (Rendement de l'actif - Taux sans risque) / Volatilité de l'actif</span>
            </p>
            <h3 className="font-semibold mt-4 text-[#CFFF24]">2. Taux de Croissance Annuel Composé (CAGR)</h3>
            <p>
              Le CAGR est utilisé pour mesurer la croissance d'un investissement sur
              une période de temps donnée, en tenant compte de l'effet de
              l'intérêt composé. Il est calculé en utilisant la valeur finale et la
              valeur initiale d'un investissement, ainsi que la durée de la période.
            </p>
            <p className="font-semibold">
              Formule : 
              <span className="text-[#fff]"> ((Valeur finale / Valeur initiale) ^ (1 / Nombre d'années)) - 1</span>
            </p>
          </div>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    </section>
  );
}

export default Section3;
