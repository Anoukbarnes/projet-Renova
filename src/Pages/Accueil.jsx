import React from 'react'
import listeProduits from '../donnees/listeProduits'
import Date from '../Composants/Accueil/Date';
import Stock from '../Composants/Accueil/Stock';
import { useOutletContext } from 'react-router-dom';
import { useMemo } from 'react'

const Accueil = () => {

  const { produits } = useOutletContext();

  const totalStock = useMemo(() => {
    return produits.reduce((total, produit) => total + produit.stock, 0);
  }, [listeProduits]);

    return (
        <main className="ml-64 p-8">
            <div className='my-2 flex justify-end'>
              <Date />
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold my-8">Renova Cuisine & Bain</h1>
            </div>
            <div className='my-12'>
              <Stock totalStock={totalStock}/>
            </div>
        </main>
    )
}

export default Accueil

