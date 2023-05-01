import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Container from "./components/Container";
import Nicocarmine from "./components/Nicocarmine";
import Travaux from "./components/Travaux";
import Travaux1 from "./components/Travaux1";
import Travaux10 from "./components/Travaux10";
import Travaux11 from "./components/Travaux11";
import Travaux12 from "./components/Travaux12";
import Travaux13 from "./components/Travaux13";
import Travaux14 from "./components/Travaux14";
import Travaux15 from "./components/Travaux15";
import Travaux16 from "./components/Travaux16";
import Travaux17 from "./components/Travaux17";
import Travaux18 from "./components/Travaux18";
import Travaux19 from "./components/Travaux19";
import Travaux2 from "./components/Travaux2";
import Travaux20 from "./components/Travaux20";
import Travaux3 from "./components/Travaux3";
import Travaux4 from "./components/Travaux4";
import Travaux5 from "./components/Travaux5";
import Travaux6 from "./components/Travaux6";
import Travaux7 from "./components/Travaux7";
import Travaux8 from "./components/Travaux8";
import Travaux9 from "./components/Travaux9";

export default function App() {
  const location = useLocation();
 
  const motionTransition = {
    transition : {duration: 1.2},
    opacity: 1,
    x: "0%",
    y: "0%",
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <motion.div
                  initial={{ y: "0%" }}
                  animate={{ ...motionTransition, y: "0%" }}
                  exit={{ ...motionTransition, y: "-100%" }}
                >
                  <Nicocarmine />
                  
                </motion.div>
              }
            />
          </Route>

          <Route
            path="/travaux"
            element={<Layout2 />}
          >
            <Route
              index
              element={
                <motion.div
                  initial={{ opacity: 1, y: "100%" }}
                  animate={{ ...motionTransition }}
                  
                  exit={{ ...motionTransition, y: "100%" }}
                >
                  <Travaux />
                </motion.div>
              }
            />

            {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20].map((num) => 
             (  <Route
                key={num}
                path={`/travaux/${num}`}
                element={
                  <motion.div
                    initial={{ opacity: 1, x: "-100%" }}
                    animate={{ ...motionTransition }}
                    exit={{ ...motionTransition, x: "100%" }}
                  >
                  <Travaux1 />
                   </motion.div>
                }
              />
            ))}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function Layout2() {
  return (
    <div>
      <Container />

      <Outlet />
    </div>
  );
}

