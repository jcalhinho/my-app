import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";
import {Divider} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

import { handleRouteChange, NEXTRoute, NEXTRoute2 } from "../App";
import { useSwipeable } from "react-swipeable";

const Travaux2 = (props) => {

  //console.log(props.nextRoute)
  const dataWithoutFirst =Data[1].pics.slice(1);
  

   const lastPics = dataWithoutFirst.pop();

 

  // Effectuer la navigation
   handleRouteChange(); // Appeler la fonction de défilement vers le haut


  
  // Effectuer la navigation
  const navigate=useNavigate(); 
  
   

 

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
 

 
  
          <motion.div
        variants={NEXTRoute(props.isOpen)}
        initial="initial"
        animate="animate"
       
             
           
            >
  <div 
   
  className="central">
    <div className="central-pix">
      <img loading="lazy" src={Data[1].pics[0]} className="pixHead" alt="" />
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
        
          <p className="text-content-titre">{Data[1].titre}</p>
          <p className="text-content-soustitre">{Data[1].subtitle}</p>
        

        <p className="text-content-credit">{Data[1].credit}</p>
      </div>
      <div className="text-right">
        <p className="text-content-des">{Data[1].desc}</p>
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
  
  {/* : 
  <motion.div
  variants={NEXTRoute2(props.boolroute)}
  initial="initial"
  animate="animate"
 

>
<div 
onTouchStart={handleTouchStart}
onTouchMove={handleTouchMove}
onTouchEnd={handleTouchEnd}
className="central">
<div className="central-pix">
<img loading="lazy" src={Data[1].pics[0]} className="pixHead" alt="" />
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

<p className="text-content-titre">{Data[1].titre}</p>
<p className="text-content-soustitre">{Data[1].subtitle}</p>


<p className="text-content-credit">{Data[1].credit}</p>
</div>
<div className="text-right">
<p className="text-content-des">{Data[1].desc}</p>
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
</motion.div>}  */}
 
  <div className="divider-icon">
    <div className="divider2-white22" />
    
      
      <div className="lien-contact"onClick={(e) => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
    
    <div className="divider2-white22" style={{ marginLeft: "0px" }} />
  </div></motion.div>
</div>

);
};
export default Travaux2;