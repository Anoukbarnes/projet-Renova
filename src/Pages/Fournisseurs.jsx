import React from 'react'
import CartesFournisseurs from '../Composants/Fournisseurs/CartesFournisseurs';
import { useOutletContext } from "react-router-dom"

const Fournisseurs = () => {

    const { fournisseurs } = useOutletContext()

    return (
      
      <main className="ml-64 p-8">
          <div className="mx-auto">
              <h1 className="text-center text-3xl font-bold p-8">Nos Fournisseurs</h1>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-5">
                {fournisseurs.map((fournisseur, index) => (
                    <CartesFournisseurs key={index} index={index} fournisseur={fournisseur} />
                ))}
          </div>
      </main>
    );
  };

export default Fournisseurs
