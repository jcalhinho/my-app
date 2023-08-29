import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Divider} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { useState } from "react";

const Travaux9 = (props) => {
 
  const dataWithoutFirst = Data[8].pics.slice(1);
  const lastPics = dataWithoutFirst.pop();
  const [nextRoute, setnextRoute] = useState(true);
  return (
  
    <div>
  
  <div className="central">
    <div className="central-pix">
      <img src={Data[8].pics[0]} className="pixHead" alt="" />
    </div>
    <div className="text">
      <div id="link" className="top-left-icon">
        <Link to={"/travaux/" + props.url}>
          <SlArrowLeft
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={() =>{ props.setIsOpen(true);
                props.settrueboolroute(true);
                }}/>                    </Link>
      </div>
      <div className="text-left">
        
          <p className="text-content-titre">{Data[8].titre}</p>
          <p className="text-content-soustitre">{Data[8].subtitle}</p>
        

        <p className="text-content-credit">{Data[8].credit}</p>
      </div>
      <div className="text-right">
        <p className="text-content-des">{Data[8].desc}</p>
      </div>

      <div id="link" className="top-right-icon">
        <Link to={"/travaux/" + props.url2}>
          <SlArrowRight
                style={{ color: "transparent" }}
                className="top-left-iconright"
                onClick={() =>{ props.setIsOpen(false);
                  props.settrueboolroute(true)}}
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
 
);
};
export default Travaux9;