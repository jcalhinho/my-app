import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

const Travaux4 = () => {
  const url : number = parseInt(window.location.href.slice(30)) -1;
  const dataWithoutFirst = Data[url].pics.slice(1);

  return (
      
        <div >
        
          <div className="central">
            <div className="central-pix">
              <img src={Data[url].pics[0]} className="pix" alt="" />
              <div className="text">
                <div className="text-left">
                  <p className="text-content">
                    {Data[url].titre}-{Data[url].subtitle}
                  </p>
                  <p className="text-content">
                    {Data[url].credit}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-content">
                    {Data[url].desc}
                  </p>
                </div>
              </div>
              <Divider className="divider1-white2" />
              {dataWithoutFirst.map((pic, index) => (
                  <img key={index} src={pic} className={index === 0 ? "pixFirst" : "pix"} alt="" />
              ))}


            </div>
          </div>

         
        </div>

  );
};
export default Travaux4;