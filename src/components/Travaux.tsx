import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


import { Data } from "../data";import MenuIcon from "@mui/icons-material/Menu";import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Container, Toolbar, Drawer } from "@mui/material";
import { FaLinkedin, FaBehanceSquare, FaInstagram } from "react-icons/fa";
import { useState } from "react";


const Travaux = () => {
  // React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

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

  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
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
