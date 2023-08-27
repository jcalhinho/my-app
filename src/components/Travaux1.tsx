import * as React from "react";
import "../index.css";

import { motion, useAnimation } from "framer-motion";
import { Data } from "../data";
import { Button, Divider } from "@mui/material";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleRouteChange } from "../App";


const Travaux1 = (props) => {
  const navigate=useNavigate(); 
 
  const dataWithoutFirst =Data[0].pics.slice(1);
  

   const lastPics = dataWithoutFirst.pop();
console.log(props.nextRoute)
  

  function NEXTRoute() {
    if (isOpen) {
      console.log("toto")
      const routeVariantstravauxnumber = {
        initial: { x: -window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
        //  exit:{ transition: { duration: 1 },x:-window.innerWidth}
      };
      return routeVariantstravauxnumber;
    } else {
      console.log("tutu")
      const routeVariantstravauxnumber = {
        initial: { x: window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },

        // exit:{ transition: { duration: 1 },x:window.innerWidth}
      };
      return routeVariantstravauxnumber;
    }
  }
  // Effectuer la navigation
   
  const [isOpen, setIsOpen] = useState(true)
  const controls = useAnimation();
  const handleGesture = (event, info) => {
    const swipeThreshold = 0; // Seuil de glissement en pixels

    if (info.offset.x > swipeThreshold) {
      // Glissement vers la droite (retour)
      controls.start({ x: '100%' }); // Animation pour sortir de l'écran à droite
      setTimeout(() => navigate("/travaux/2"), 0); // Naviguer vers la route précédente après l'animation
    } else if (info.offset.x < -swipeThreshold) {
      // Glissement vers la gauche (avance)
      controls.start({ x: '-100%' }); // Animation pour sortir de l'écran à gauche
      setTimeout(() => navigate('/travaux/20'), 0); // Naviguer vers la route suivante après l'animation
    }
  };
  return (
    <motion.div
    initial= {{ x: -window.innerWidth }}
        animate= {{
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        }}
        variants={NEXTRoute()}
        // exit={{ transition: { duration: 1 },x:window.innerWidth}}
     
     
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleGesture}
    >
        <div>
      
      <div className="central">
        <div className="central-pix">
          <img src={Data[0].pics[0]} className="pixHead" alt="" />
        </div>
        <div className="text">
          <div id="link" className="top-left-icon">
            <Link to={"/travaux/" + props.url}>
              <SlArrowLeft
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={() => setIsOpen(isOpen => !isOpen)} />
             
            </Link>
          </div>
          <div className="text-left">
            
              <p className="text-content-titre">{Data[0].titre}</p>
              <p className="text-content-soustitre">{Data[0].subtitle}</p>
            

            <p className="text-content-credit">{Data[0].credit}</p>
          </div>
          <div className="text-right">
            <p className="text-content-des">{Data[0].desc}</p>
          </div>

          <div id="link" className="top-right-icon">
            <Link to={"/travaux/" + props.url2}>
              <SlArrowRight
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={() => setIsOpen(isOpen => isOpen)} />
              
            </Link>
          </div>
        </div>

        <div className="central-pix">
          <Divider className="divider1-white2" />
          {dataWithoutFirst.map((pic, index) => (
            <img
              key={index}
              src={pic}
              className={index === 0 ? "pixFirst" : "pix"}
              alt=""
            />
          ))}
          <img src={lastPics} className={"pixHead"} alt="" />
        </div>
      </div>
      
      <div className="divider-icon">
        <div className="divider2-white22" />
        <a className="lien-contact" href="/">
          contact@nicocarmine.com
        </a>
        <div className="divider2-white22" style={{ marginLeft: "0px" }} />
      </div>
    </div>
    </motion.div>
  );
};
export default Travaux1;