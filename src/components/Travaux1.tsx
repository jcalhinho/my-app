import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Button, Divider} from "@mui/material";
import {SlArrowDown, SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Link} from "react-router-dom";


const Travaux1 = () => {
  const url : number = parseInt(window.location.href.slice(30)) -1;
  const dataWithoutFirst = Data[url].pics.slice(1);
console.log(url)
  return (
      <div className="container">



          {/* <div className="top-left">
            <Link to="/contact"><p className="top-left-contact">contact</p></Link>
            <Link to="/"><p className="top-left-nico">nicocarmine</p></Link>
          </div>
          <Link to="/travaux/20">
            <div className="top-left-icon">
            <p className="top-left-iconleft"><SlArrowLeft /></p>
          </div>
            </Link> */}

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

          {/* <div className="top-right">
            <Link to="/travaux"><p className="top-left-travaux">travaux</p></Link>
          </div>
          <Link to="/travaux/2">
          <div className="top-right-icon">
            <p className="top-left-iconright"><SlArrowRight /></p>
          </div>
          </Link> */}


       </div>
  );
};
export default Travaux1;