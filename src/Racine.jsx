import React from 'react'
import NavBar from './Composants/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import listeProduits from './donnees/listeProduits'
import listeFournisseurs from './donnees/listeFournisseurs'


const Racine = () => {

  const [produits, setProduits] = useState(listeProduits)
  const [fournisseurs, setFournisseurs] = useState(listeFournisseurs)

    return (
      <>
      <NavBar />
      <Outlet context={{ produits, setProduits, fournisseurs, setFournisseurs }} />
      </>
    )
  }
  
export default Racine