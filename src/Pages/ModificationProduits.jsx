import React, { useState } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import FormulaireModif from '../Composants/Produits/FormulaireModif';

const ModificationProduits = () => {
  const contexte = useOutletContext();
  const { id } = useParams();
  const { fournisseurs, produits, setProduits } = contexte;
  const navigate = useNavigate();

  const produitInit = produits.find(p => p.id === id) || {
    id: "",
    nom: "",
    prix: "",
    stock: "",
    categorie: "",
    fournisseur: "",
    description: "",
  };

  const [produit, setProduit] = useState(produitInit);
  const [erreurs, setErreurs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduit({ ...produit, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valider()) {
        return;
    }
    modifier(produit.id, produit);
  }

  const modifier = (id) => {
    let produitsModifies = produits.map((p) => {
      if (p.id === id) {
        return produit; 
      }
      return p;
    });

    setProduits(produitsModifies);
    navigate('/produits')
  };


  const valider = () => {
    let erreurs = {};

    if (produit.nom === "") {
      erreurs.nom = "Veuillez entrer un nom";
    } else if (produit.nom.length < 4) {
      erreurs.nom = "Nom plus de 3 caractères requis";
    }

    if (produit.prix === "") {
      erreurs.prix = "Veuillez entrer un prix";
    } else if (produit.prix < 10) {
      erreurs.prix = "Prix minimum de 10$";
    }

    if (produit.stock === "") {
      erreurs.stock = "Veuillez entrer la quantité en stock";
    } else if (produit.stock < 1) {
      erreurs.stock = "Quantité minimum de 1";
    }

    if (produit.description === "") {
      erreurs.description = "Veuillez entrer une description";
    } else if (produit.description.length < 10 || produit.description.length > 500) {
      erreurs.description = "La description doit avoir entre 10 et 500 caractères";
    }

    setErreurs(erreurs);
    return Object.keys(erreurs).length === 0;
  }

  return (
    <main className="ml-64 p-8">
      <div className="mx-auto">
        <h1 className="text-center text-3xl font-bold p-8">Modification de produits</h1>
      </div>
      <div>
        <FormulaireModif
          produit={produit}
          erreurs={erreurs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fournisseurs={fournisseurs}
        />
      </div>
    </main>
  )
}

export default ModificationProduits;