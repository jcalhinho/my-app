import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { useState } from "react";
import { handleRouteChange } from "../App";

const Travaux2 = (props) => {

  console.log(props.nextRoute)
  const dataWithoutFirst =Data[1].pics.slice(1);
  

   const lastPics = dataWithoutFirst.pop();

 

  // Effectuer la navigation
   handleRouteChange(); // Appeler la fonction de défilement vers le haut


   function NEXTRoute() {
    if (props.nextRoute) {
      const routeVariantstravauxnumber = {
        initial: { x: -window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
         exit:{ transition: { duration: 1 },x:-window.innerWidth}
      };
      return routeVariantstravauxnumber;
    } else {
      const routeVariantstravauxnumber = {
        initial: { x: window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
        exit:{ transition: { duration: 1 },x:window.innerWidth}
      };
      return routeVariantstravauxnumber;
    }
  }
  // Effectuer la navigation
   
  const [isOpen, setIsOpen] = useState(true)


  return (
    <motion.div
    variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  exit="exit"
  >
        <div>
      
      <div className="central">
        <div className="central-pix">
          <img src={Data[1].pics[0]} className="pixHead" alt="" />
        </div>
        <div className="text">
          <div id="link" className="top-left-icon">
            <Link to={"/travaux/" + props.url}>
              <SlArrowLeft
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={(params) => null}
              />
            </Link>
          </div>
          <div className="text-left">
            
              <p className="text-content-titre">{Data[1].titre}</p>
              <p className="text-content-soustitre">{Data[1].subtitle}</p>
            

            <p className="text-content-credit">{Data[1].credit}</p>
          </div>
          <div className="text-right">
            <p className="text-content-des">{Data[1].desc}</p>
          </div>

          <div id="link" className="top-right-icon">
            <Link to={"/travaux/" + props.url2}>
              <SlArrowRight
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={(params) => null}
              />
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
export default Travaux2;