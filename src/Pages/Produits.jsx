import React from 'react'
import CartesProduits from '../Composants/Produits/CartesProduits'
import { useOutletContext, useNavigate } from "react-router-dom"

const Produits = () => {

  const contexte = useOutletContext()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/produits/ajout-produits")
  }


  return (
    <main className="ml-64 p-8">
        <div className="mx-auto">
            <h1 className="text-center text-3xl font-bold p-8">Nos Produits</h1>
        </div>
        <div className='flex justify-end pt-3 pb-8'>
          <button className='bg-green-600 text-white p-3 rounded-xl' 
          onClick={handleClick}>
          Ajouter un produit +
          </button>
        </div>
        <div className="grid grid-cols-12 gap-8">
        {contexte.produits.map((produit, index) => (
          <CartesProduits key={index} produit={produit} />
        ))}
      </div>
    </main>
  )
}

export default Produits

