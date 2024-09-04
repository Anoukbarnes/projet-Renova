import React from 'react'

const FormulaireAjout = ({ produits, erreurs, handleChange, handleSubmit, fournisseurs, index }) => {
    
    
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-start-2 col-end-6'>
          <div className='my-5'>
            <label>
              Identifiant:
            <div>
              <input
                className='mt-2 py-3 pl-3 pr-32 rounded-md' 
                type="text"
                name="id" 
                placeholder="ex: AA-000"
                value={produits.id}
                onChange={handleChange} />
            </div>
          </label>
            {erreurs.id && <p className='text-red-600 text-sm'>{erreurs.id}</p>}
          </div>

          <div className='my-5'>
            <label>
              Nom du produit:
            <div>
              <input 
                className='mt-2 py-3 pl-3 pr-32 rounded-md'
                type="text"  
                name="nom" 
                placeholder="Nom du produit"
                value={produits.nom}
                onChange={handleChange} />
            </div>
            </label>
            {erreurs.nom && <p className='text-red-600 text-sm'>{erreurs.nom}</p>}
          </div>

          <div className='my-5'>
            <label>
              Prix:
            <div>
              <input
                className='mt-2 py-3 pl-3 pr-32 rounded-md'
                type="number"
                name="prix" 
                placeholder="Prix du produit" 
                value={produits.prix}
                onChange={handleChange} />
            </div>
            </label>
            {erreurs.prix && <p className='text-red-600 text-sm'>{erreurs.prix}</p>}
          </div>
          <div className='my-5'>
            <label>
              Quantité en stock:
              <div>
                <input
                  className='mt-2 py-3 pl-3 pr-32 rounded-md' 
                  type="number"
                  name="stock" 
                  placeholder="Quantité en stock" 
                  value={produits.stock}
                  onChange={handleChange} />
              </div>
            </label>
            {erreurs.stock && <p className='text-red-600 text-sm'>{erreurs.stock}</p>}
          </div>
        </div>
        <div className='col-start-7 col-end-11'>
          <div className='my-5'>
            <select 
              className='mt-8 py-3.5 pl-3 pr-36 rounded-md' 
              name="categorie" 
              placeholder="Catégorie du produit" 
              value={produits.categorie}
              onChange={handleChange}>
              <option value="">Choisir une catégorie</option>
              <option value="Cuisine">Cuisine</option>
              <option value="Salle de bain">Salle de bain</option>
            </select>
              {erreurs.categorie && <p className='text-red-600 text-sm'>{erreurs.categorie}</p>}
          </div>

          <div className='my-5'>
            <select
              className='mt-8 py-3.5 pl-3 pr-36 rounded-md'
              name="fournisseur" 
              placeholder="Fournisseur" 
              value={produits.fournisseur}
              onChange={handleChange} 
              >
              <option value="">Choisir un fournisseur</option>
            {fournisseurs && fournisseurs
              .filter(fournisseur => 
              !produits.categorie || fournisseur.categorie === produits.categorie)
              .map((fournisseur, index) => (
              <option key={index} value={fournisseur.nom}>
                  {fournisseur.nom}
              </option>
              ))
              }
            </select>
              {erreurs.fournisseur && <p className='text-red-600 text-sm'>{erreurs.fournisseur}</p>}
          </div>

          <div className='my-5 mt-7'>
            <label>
              Description du produit: 
              <div>
                <textarea
                  className='mt-4 py-2 pl-3 pr-32 rounded-md' 
                  type="textarea"
                  rows="5" 
                  cols="30"
                  name="description" 
                  placeholder="Description du produit" 
                  value={produits.description}
                  onChange={handleChange} />
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
              value="Valider" />
      </div>
    </form>
  )
}

export default FormulaireAjout
