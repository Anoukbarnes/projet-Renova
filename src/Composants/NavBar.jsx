import React from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavBar = () => {

  const location = useLocation();
  console.log("Current location:", location);


  return (
    <>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
        <div className="overflow-y-auto py-3 px-3 h-full bg-gray-800 border-gray-700">
          <ul className="pt-5 mt-5 space-y-2">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  isActive ? 'bg-teal-700 rounded-xl block py-2 pl-4' : 'text-white hover:bg-teal-600 py-2 pl-4 rounded-xl block'
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/produits" 
                className={({ isActive }) => 
                  isActive ? 'bg-teal-700 rounded-xl py-2 block pl-4' : 'text-white py-2 pl-4 hover:bg-teal-600 rounded-xl block'
                }
              >
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/fournisseurs" 
                className={({ isActive }) => 
                  isActive ? 'bg-teal-700 rounded-xl py-2 pl-4 block' : 'text-white hover:bg-teal-600 py-2 pl-4 rounded-xl block'
                }
              >
              Fournisseurs
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default NavBar