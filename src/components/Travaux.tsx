import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


import { Data } from "../data";

import { useState } from "react";


const Travaux = () => {


  const routeVariantstravaux = {
    initial: {
      opacity: 0,
      y: "100%",
      transition: { duration: 1.2 },
    },
    animate: {
      transition: { duration: 1.2 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit: { opacity: 0 },
  };


 
  return (
    <div>
      
       <motion.div
            
           variants={routeVariantstravaux}
            initial="initial"
            animate="animate"
            
          >
      <div className="central">
        <div className="central-travaux">
          {Data.map((pic, index) => (
            <div key={index} className="thumb">
              <Link to={`/travaux/${pic.id}`}>
              <source srcSet={pic.vignette}  type="image/webp" />
                <img loading="eager" src={pic.vignette} className="pixThumb" alt="nicocarmine" />
              </Link>
              <p className="firstPixP">{pic.titre}</p>
              <p className="secondPixP">{pic.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-icon">
        <div className="divider2-white22" />
        <div
          className="lien-contact"
          onClick={(e) => {
            window.location.href = "mailto:contact@nicocarmine.com";
          }}
        >
          contact@nicocarmine.com
        </div>
      </div></motion.div>
    </div>
  );
};
export default Travaux;
