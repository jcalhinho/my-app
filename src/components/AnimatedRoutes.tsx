import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
// Importer les composants pour chaque route
import Travaux from "./Travaux";
import Travaux1 from "./Travaux1";
import Travaux2 from "./Travaux2";
import Travaux3 from "./Travaux3";
import Travaux4 from "./Travaux4";
import Travaux5 from "./Travaux5";
import Travaux6 from "./Travaux6";
import Travaux7 from "./Travaux7";
import Travaux8 from "./Travaux8";
import Travaux9 from "./Travaux9";
import Travaux10 from "./Travaux10";
import Travaux11 from "./Travaux11";
import Travaux12 from "./Travaux12";
import Travaux13 from "./Travaux13";
import Travaux14 from "./Travaux14";
import Travaux15 from "./Travaux15";
import Travaux16 from "./Travaux16";
import Travaux17 from "./Travaux17";
import Travaux18 from "./Travaux18";
import Travaux19 from "./Travaux19";
import Travaux20 from "./Travaux20";
import Nicocarmine from "./Nicocarmine";
import Contact from "./Contact";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route  path="/" element={<Nicocarmine />} />
                <Route  path="/travaux" element={<Travaux />} />
                    <Route path="/travaux/1"  element={<Travaux1 />} />
                    <Route path="/travaux/2"  element={<Travaux2 />} />
                    <Route path="/travaux/3"  element={<Travaux3 />} />
                    <Route path="/travaux/4"  element={<Travaux4 />} />
                    <Route path="/travaux/5"  element={<Travaux5 />} />
                    <Route path="/travaux/6"  element={<Travaux6 />} />
                    <Route path="/travaux/7"  element={<Travaux7 />} />
                    <Route path="/travaux/8"  element={<Travaux8 />} />
                    <Route path="/travaux/9"  element={<Travaux9 />} />
                    <Route path="/travaux/10" element={<Travaux10 />} />
                    <Route path="/travaux/11" element={<Travaux11 />} />
                    <Route path="/travaux/12" element={<Travaux12 />} />
                    <Route path="/travaux/13" element={<Travaux13 />} />
                    <Route path="/travaux/14" element={<Travaux14 />} />
                    <Route path="/travaux/15" element={<Travaux15 />} />
                    <Route path="/travaux/16" element={<Travaux16 />} />
                    <Route path="/travaux/17" element={<Travaux17 />} />
                    <Route path="/travaux/18" element={<Travaux18 />} />
                    <Route path="/travaux/19" element={<Travaux19 />} />
                    <Route path="/travaux/20" element={<Travaux20 />} />

                <Route  path="/contact" element={<Contact />} />
            </Routes></AnimatePresence>
    );
};

export default AnimatedRoutes;