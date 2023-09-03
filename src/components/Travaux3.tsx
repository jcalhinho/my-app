import * as React from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import { Data } from "../data";
import { Divider } from "@mui/material";
import { useState } from "react";
import { NEXTRoute, NEXTRoute2 } from "../App";
import { useSwipeable, LEFT, RIGHT } from "react-swipeable";

const Travaux3 = (props) => {
  const navigate = useNavigate();
  const dataWithoutFirst = Data[2].pics.slice(1);
  const lastPics = dataWithoutFirst.pop();
  const [nextRoute, setnextRoute] = useState(true);
  let startX = 0;
  let startY = 0;
  let isScrolling = false;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
   
  };

 

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
   // if (!containerRef.current) return;
  
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
  
    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      
      isScrolling = true;
  
      
    }else {
      
            if (deltaX > 0) {
              props.setIsOpen(true);
              setTimeout(() => 
              navigate("/travaux/" + props.url), 50);
              
            } else {
      
              props.setIsOpen(false);
              setTimeout(() => navigate('/travaux/' + props.url2), 50); // Naviguer vers la route suivante après l'animation
              
            }
            
          
            
             
            
          }
  };

   const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {

      props.setIsOpen(false);
       setTimeout(() => 
       navigate("/travaux/" + props.url2), 150);
      
  

     
    
},
onSwipedRight: (eventData) => {

  
  


  props.setIsOpen(true);
   setTimeout(() => navigate('/travaux/' + props.url), 150); // Naviguer vers la route suivante après l'animation


},
swipeDuration: Infinity,
    




})



  return (
   
        <div {...handlers}>
  
      {/* {props.trueboolroute ? ( */}
        <motion.div
          variants={NEXTRoute(props.isOpen)}
          initial="initial"
          animate="animate"
        >
          <div
            
            className="central"
          >
            <div className="central-pix">
              <img src={Data[2].pics[0]} className="pixHead" alt="" />
            </div>
            <div className="text">
              <div id="link" className="top-left-icon">
                <Link to={"/travaux/" + props.url}>
                  <SlArrowLeft
                    style={{ color: "transparent" }}
                    className="top-left-iconright"
                    onClick={() => {
                      props.setIsOpen(true);
                      props.settrueboolroute(true);
                    }}
                  />
                </Link>
              </div>
              <div className="text-left">
                <p className="text-content-titre">{Data[2].titre}</p>
                <p className="text-content-soustitre">{Data[2].subtitle}</p>

                <p className="text-content-credit">{Data[2].credit}</p>
              </div>
              <div className="text-right">
                <p className="text-content-des">{Data[2].desc}</p>
              </div>

              <div id="link" className="top-right-icon">
                <Link to={"/travaux/" + props.url2}>
                  <SlArrowRight
                    style={{ color: "transparent" }}
                    className="top-left-iconright"
                    onClick={() => {
                      props.setIsOpen(false);
                      props.settrueboolroute(true);
                    }}
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
       
      {/* ) : (
        <motion.div
          variants={NEXTRoute2(props.boolroute)}
          initial="initial"
          animate="animate"
        >
          <div
            //  onTouchStart={handleTouchStart}
            //  onTouchMove={handleTouchMove}
            //  onTouchEnd={handleTouchEnd}
            className="central"
          >
            <div className="central-pix">
              <img src={Data[2].pics[0]} className="pixHead" alt="" />
            </div>
            <div className="text">
              <div id="link" className="top-left-icon">
                <Link to={"/travaux/" + props.url}>
                  <SlArrowLeft
                    style={{ color: "transparent" }}
                    className="top-left-iconright"
                    onClick={() => {
                      props.setIsOpen(true);
                      props.settrueboolroute(true);
                    }}
                  />
                </Link>
              </div>
              <div className="text-left">
                <p className="text-content-titre">{Data[2].titre}</p>
                <p className="text-content-soustitre">{Data[2].subtitle}</p>

                <p className="text-content-credit">{Data[2].credit}</p>
              </div>
              <div className="text-right">
                <p className="text-content-des">{Data[2].desc}</p>
              </div>

              <div id="link" className="top-right-icon">
                <Link to={"/travaux/" + props.url2}>
                  <SlArrowRight
                    style={{ color: "transparent" }}
                    className="top-left-iconright"
                    onClick={() => {
                      props.setIsOpen(false);
                      props.settrueboolroute(true);
                    }}
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
        </motion.div>
      )} */}
      <div className="divider-icon">
        <div className="divider2-white22" />
        <a className="lien-contact" href="/">
          contact@nicocarmine.com
        </a>
        <div className="divider2-white22" style={{ marginLeft: "0px" }} />
      </div></motion.div>
    </div>
  );
};
export default Travaux3;
