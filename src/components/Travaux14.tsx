import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Divider} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { NEXTRoute, NEXTRoute2 } from "../App";
import { LEFT, RIGHT, useSwipeable } from "react-swipeable";

const Travaux14 = (props) => {
  
  const dataWithoutFirst = Data[13].pics.slice(1);
  const lastPics = dataWithoutFirst.pop();

  const navigate=useNavigate();   let startX = 0;
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
      navigate("/travaux/" + props.url2)
    },
    onSwipedRight: (eventData) => {
      props.setIsOpen(true);
     navigate("/travaux/" + props.url)// Naviguer vers la route suivante après l'animation
    },
    swipeDuration: Infinity,
     // onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
    trackMouse: true
  });



  return (
   
        <div {...handlers}>
 

 
  
{/* {props.trueboolroute ?  */} 
          <motion.div
        variants={NEXTRoute(props.isOpen)}
        initial="initial"
        animate="animate"
        exit="exit"
             
           
            >
  <div 
 
  className="central">
    <div className="central-pix">
      <img loading="lazy" src={Data[13].pics[0]} className="pixHead" alt="" />
    </div>
    <div className="text">
      <div id="link" className="top-left-icon">
        <Link to={"/travaux/" + props.url}>
          <SlArrowLeft
            style={{ color: "transparent" }}
            className="top-left-iconright"
            onClick={() =>{ props.setIsOpen(true);
            props.settrueboolroute(true);
            }}/> 
         
        </Link>
      </div>
      <div className="text-left">
        
          <p className="text-content-titre">{Data[13].titre}</p>
          <p className="text-content-soustitre">{Data[13].subtitle}</p>
        

        <p className="text-content-credit">{Data[13].credit}</p>
      </div>
      <div className="text-right">
        <p className="text-content-des">{Data[13].desc}</p>
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
        <img loading="lazy"
          key={index}
          src={pic}
          className={index === 0 ? "pixFirst" : "pix"}
          alt=""
        />
      ))}
      <img loading="lazy" src={lastPics} className={"pixHead"} alt="" />
    </div>
  </div>
  

  <div className="divider-icon">
    <div className="divider2-white22" />
    <div className="lien-contact"onClick={(e) => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
    <div className="divider2-white22" style={{ marginLeft: "0px" }} />
  </div></motion.div>
</div>

);
};
export default Travaux14;