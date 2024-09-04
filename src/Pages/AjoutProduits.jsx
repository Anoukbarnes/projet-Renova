import React from 'react'
import { useNavigate, useOutletContext } from "react-router-dom"
import { useState } from 'react'
import FormulaireAjout from '../Composants/Produits/FormulaireAjout';

const AjoutProduits = () => {
  
  const contexte = useOutletContext();
  const { fournisseurs } = useOutletContext();
  const navigate = useNavigate();
 
  const [erreurs, setErreurs] = useState([
    { 
    id: "",
    nom: "",
    prix: "",
    stock: "",
    categorie: "",
    fournisseur: "",
    description: "",
    },
  ]);

  const [produits, setProduits] = useState({
    id: "",
    nom: "",
    prix: "",
    stock: "",
    categorie: "",
    fournisseur: "",
    description: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProduits({ ...produits, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valider()) {
        return;
    }

    const nouvelleCarte = {
      id: produits.id,
      nom: produits.nom,
      prix: produits.prix,
      stock: produits.stock,
      categorie: produits.categorie,
      fournisseur: produits.fournisseur,
      description: produits.description,
    };

    contexte.setProduits([...contexte.produits, nouvelleCarte]);
    navigate('/produits')
  }

    const valider = () => {

      let erreurs = {};

        if (produits.id === "") {
          erreurs.id = "Veuillez entrer un ID"
        } 
        else if (!/^(CU|SB)-?[0-9]{3}$/.test(produits.id)) {
          erreurs.id = "Identifiant du produit doit avoir la forme: CU-000 pour cuisine ou SB-000 pour salle de bain" ;
        } 
        else if(contexte.produits.find((p) => p.code === produits.id)) {
          erreurs.id = "Cet identifiant de produit existe déjà" ;
        }

        if (produits.nom === "") {
            erreurs.nom = "Veuillez entrer un nom"
        } else if (produits.nom.length < 4) {
            erreurs.nom = "Nom plus de 3 caractères requis"
        }

        if (produits.prix === "") {
            erreurs.prix = "Veuillez entrer un prix"
        } else if (produits.prix.length > 11) {
            erreurs.prix = "Prix minimum de 10$"
        }

        if (produits.stock === "") {
            erreurs.stock = "Veuillez entrer la quantité en stock"
        } else if (produits.stock.length < 2) {
            erreurs.stock = "Quantité minimum de 1"
        }

        if (produits.categorie === "") {
            erreurs.categorie = "Veuillez entrer une catégorie"
        } 
        if (produits.fournisseur === "") {
            erreurs.fournisseur = "Veuillez entrer une catégorie"
        } 

        if (produits.description === "") {
            erreurs.description = "Veuillez entrer le fournisseur"
        } else if (produits.description.length <= 10 || produits.description.length >= 500) {
            erreurs.description = "La description doit avoir entre 10 et 500 caractères"
        }
        
        setErreurs(erreurs);
        return Object.keys(erreurs).length === 0;
    }

  return (
    <main className="ml-64 p-8">
      <h1 className="text-center text-3xl font-bold p-8">Ajouts de produits</h1>
      <FormulaireAjout 
        produits={produits}
        erreurs={erreurs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fournisseurs={fournisseurs}
      />
    </main>
  )
}

export default AjoutProduits
