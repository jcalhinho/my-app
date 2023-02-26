import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
// Importer les composants pour chaque route
import Travaux from "./Travaux";
import Nicocarmine from "./Nicocarmine";
import Contact from "./Contact";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
                <Route  path="/travaux" element={<Travaux />} />
                <Route  path="/" element={<Nicocarmine />} />
                <Route  path="/contact" element={<Contact />} />
            </Routes></AnimatePresence>
    );
};

export default AnimatedRoutes;