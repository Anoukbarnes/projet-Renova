import React from 'react';

const CartesFournisseurs = ({ index, fournisseur }) => {
  return (
    <div key={index} className="border p-4 border-gray-400 bg-gray-100 rounded-md shadow-md col-span-4">
      <h1 className='text-2xl text-center'>{fournisseur.nom}</h1>
      <div className='flex justify-between pt-8 items-center'>
          <a className='bg-blue-300 hover:bg-blue-200 p-2 rounded-lg shadow-sm' href={fournisseur.siteWeb} target="_blank">Site Web</a>
          <p className={fournisseur.categorie === 'Cuisine' ? 'text-red-400' : 'text-green-800'}>{fournisseur.categorie}</p>
      </div>
    </div>
  );
};

export default CartesFournisseurs;

