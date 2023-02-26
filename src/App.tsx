import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// Importer les composants pour chaque route
import Travaux from "./components/Travaux";
import Nicocarmine from "./components/Nicocarmine";
import Contact from "./components/Contact";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Définir les sous-routes de la route "Travaux.tsx" seulement si elle est active


const App = () => {
  return (
      <Router>
          <AnimatedRoutes />
      </Router>
  );
};

export default App;



