import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import { Button, Divider } from "@mui/material";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleRouteChange } from "../App";


const Travaux1 = (props) => {
  const navigate=useNavigate(); 
  const url: number = parseInt(window.location.href.slice(-1)) -1 || 0;
  const dataWithoutFirst = Data[url].pics.slice(1);
  if (dataWithoutFirst === undefined){ 
    return null
  };

   const lastPics = dataWithoutFirst.pop();

 

  // Effectuer la navigation
  // handleRouteChange(); // Appeler la fonction de défilement vers le haut



  return (
    <motion.div
        drag={'x'}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={
          (event, info) => 
    
            {if(info.offset.x <= 0) {console.log(event)
              navigate("/travaux/" + props.url)
            } else {
              navigate("/travaux/" + props.url2)
              console.log(event)
            }
          }

        }
      >
        <div>
      
      <div className="central">
        <div className="central-pix">
          <img src={Data[url].pics[0]} className="pixHead" alt="" />
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
            
              <p className="text-content-titre">{Data[url].titre}</p>
              <p className="text-content-soustitre">{Data[url].subtitle}</p>
            

            <p className="text-content-credit">{Data[url].credit}</p>
          </div>
          <div className="text-right">
            <p className="text-content-des">{Data[url].desc}</p>
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
export default Travaux1;