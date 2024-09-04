import { createBrowserRouter } from "react-router-dom";
import Accueil from '../Pages/Accueil'
import Produits from '../Pages/Produits'
import Fournisseurs from '../Pages/Fournisseurs'
import Racine from "../Racine";
import Erreur from "../Composants/Erreur";
import ModificationProduits from "../Pages/ModificationProduits";
import AjoutProduits from "../Pages/AjoutProduits"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Racine />,
        children: [
          {
            path: "/",
            element: <Accueil />,
          },
          {
            path: "/fournisseurs",
            element: <Fournisseurs />,
          },
          {
            path: "/produits",
            element: <Produits />,
          },
          {
            path: "/produits/ajout-produits",
            element: <AjoutProduits />,
          },
          {
            path: "/produits/modification-produit/:id",
            element: <ModificationProduits />,
          },
        ],
    },
    {
        path: "*",
        element: <Erreur />,
    },
]);

export default routes;