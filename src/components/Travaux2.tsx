import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import pic from "../02-GEORGE ORWELL/GEORGE ORWELL_01.jpg";
import pic1 from "../02-GEORGE ORWELL/GEORGE ORWELL_02.jpg";
import pic2 from "../02-GEORGE ORWELL/GEORGE ORWELL_03.jpg";

import {Divider} from "@mui/material";


const Travaux2 = () => {
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


            </div>
          </div>

          <div className="top-right">
            <p className="top-left-travaux">travaux</p>
          </div>
        </div>
      </motion.div>
  );
};
export default Travaux2;