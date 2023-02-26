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


const Travaux4 = () => {
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
          <div className="central">
            <div className="central-pix">
              <img src={pic} className="pix" alt="" />
              <div className="text">
                <div className="text-left">
                  <p className="text-content">
                    It's always a hassle to correctly position a rotated text.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-content">
                    It's always a hassle to correctly position a rotated text.
                    width or height is needed (hover to change the text direction)
                  </p>
                </div>
              </div>
              <Divider className="divider1-white2" />
              <img src={pic1} className="pixFirst" alt="" />
              <img src={pic2} className="pix" alt="" />
              <img src={pic3} className="pix" alt="" />
              <img src={pic4} className="pix" alt="" />
              <img src={pic5} className="pix" alt="" />

            </div>
          </div>

          <div className="top-right">
            <p className="top-left-travaux">travaux</p>
          </div>
        </div>
      </motion.div>
  );
};
export default Travaux4;