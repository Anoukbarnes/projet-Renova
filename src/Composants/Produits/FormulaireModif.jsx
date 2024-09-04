import React from 'react';

const FormulaireModif = ({ produit, erreurs, handleChange, handleSubmit, fournisseurs }) => {
  return (
    
    <form onSubmit={handleSubmit} className='w-full mx-auto'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-start-2 col-end-6'>
          <div className='my-5'>
            <label>
              Identifiant:
              <input
                disabled
                className='mt-4 py-2.5 pl-3 pr-32 rounded-md bg-gray-200'
                type="text"
                name="id"
                placeholder="ex: AA-000"
                value={produit.id}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className='my-5'>
            <label>
              Nom du produit:
              <div>
                <input
                  className='mt-4 py-2.5 pl-3 pr-32 rounded-md'
                  type="text"
                  name="nom"
                  placeholder="Nom du produit"
                  value={produit.nom}
                  onChange={handleChange}
                />
              </div>
            </label>
            {erreurs.nom && <p className='text-red-600 text-sm'>{erreurs.nom}</p>}
          </div>

          <div className='my-5'>
            <label>
              Prix: 
              <div>
                <input
                  className='mt-4 py-2.5 pl-3 pr-32 rounded-md'
                  type="number"
                  name="prix"
                  placeholder="Prix du produit"
                  value={produit.prix}
                  onChange={handleChange}
                />
              </div>
            </label>
            {erreurs.prix && <p className='text-red-600 text-sm'>{erreurs.prix}</p>}
          </div>

          <div className='my-5'>
            <label>
              Quantité en stock:
              <div>
                <input
                  className='mt-4 py-2.5 pl-3 pr-32 rounded-md'
                  type="number"
                  name="stock"
                  placeholder="Quantité en stock"
                  value={produit.stock}
                  onChange={handleChange}
                />
              </div>
            </label>
            {erreurs.stock && <p className='text-red-600 text-sm'>{erreurs.stock}</p>}
          </div>
          </div>

          <div className='col-start-7 col-end-12'>
          <div className='my-5'>
            <select
              disabled
              className='mt-10 py-3 pl-3 pr-52 rounded-md bg-gray-200' 
              name="categorie"
              value={produit.categorie}
              onChange={handleChange}>
              <option value={produit.categorie}>{produit.categorie}</option>
            </select>
          </div>

          <div className='my-5'>
            <select
              disabled
              className='mt-10 py-3 pl-3 pr-52 rounded-md bg-gray-200' 
              name="fournisseur"
              value={produit.fournisseur}
              onChange={handleChange}
            >
              {fournisseurs.map((fournisseur, index) => (
                <option key={index} value={fournisseur.id}>
                  {fournisseur.nom}
                </option>
              ))}
            </select>
          </div>

          <div className='mt-10'>
            <label>
              Description du produit:
              <div>
              <textarea
                className='mt-3 py-2 pl-3 pr-32 rounded-md'
                name="description"
                rows="5" 
                cols="30"
                placeholder="Description du produit"
                value={produit.description}
                onChange={handleChange}
              />
              </div>
            </label>
            {erreurs.description && <p className='text-red-600 text-sm'>{erreurs.description}</p>}
          </div>
        </div>
      </div>
        <div className='flex justify-center'>
          <input
            className='bg-green-600 text-white py-2 px-32 mt-8 rounded-xl'
            type="submit"
            value="Modifier"
          />
        </div>
    </form>
  )
}

export default FormulaireModif;