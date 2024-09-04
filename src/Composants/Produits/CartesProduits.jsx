import React from 'react'
import { Link } from 'react-router-dom'

const CartesProduits = ({index, produit}) => {
  return (
    <div key={index} className='bg-slate-100 col-span-4 rounded-md shadow-md'>
        <div className='px-4 py-6'>
            <h2 className='pb-5 font-semibold'>ID: {produit.id}</h2>
            <p className='pb-2'>Nom: {produit.nom}</p>
            <p className='pb-2'>Prix: {produit.prix} $</p>
            <p className='pb-2'>Quantité: {produit.stock}</p>
            <p className='pb-2'>Fournisseur: {produit.fournisseur}</p>
            <p className='pb-2'>{produit.description}</p>
        </div>
        <div className='flex justify-end'>
        <Link to={`/produits/modification-produit/${produit.id}`}>
          <button className='bg-orange-300 p-2 mx-8 mb-5 rounded-md'
          key={produit.id}>
          Modifier</button>
        </Link>
        </div>
    </div>
  )
}

export default CartesProduits
