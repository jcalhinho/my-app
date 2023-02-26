import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import pic from "../01-MR PAON/MR PAON_01.png";
import pic1 from "../01-MR PAON/MR PAON_02.png";
import pic2 from "../01-MR PAON/MR PAON_03.png";
import pic3 from "../01-MR PAON/MR PAON_04.png";
import pic4 from "../01-MR PAON/MR PAON_05.png";
import pic5 from "../01-MR PAON/MR PAON_06.png";
import {Divider} from "@mui/material";


const Contact = () => {
  return (
      <motion.div className="container"
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration:1}}}
                  exit={{opacity: 0}}
      >
        <div className="container">
          <div className="top-left">
            <p className="top-left-contact">contact</p>
            <p className="top-left-nico">nicocarmine</p>
          </div>


          <div className="top-right">
            <p className="top-left-travaux">travaux</p>
          </div>
        </div>
      </motion.div>
  );
};
export default Contact;