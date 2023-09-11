import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import { Data } from "../data";import MenuIcon from "@mui/icons-material/Menu";import CloseIcon from "@mui/icons-material/Close";
import {AppBar, Container, Divider, Drawer, Toolbar} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

import { NEXTRoute } from "../App";
import { useSwipeable } from "react-swipeable";
import { FaLinkedin, FaBehanceSquare, FaInstagram } from "react-icons/fa";

const Travaux10 = (props) => {
  
  const dataWithoutFirst = Data[9].pics.slice(1);
  const lastPics = dataWithoutFirst.pop();
 
  
  const navigate=useNavigate();  

 


    const handlers = useSwipeable({
    onSwipedLeft: () => {
      props.setIsOpen(false);
      navigate("/travaux/" + props.url2)
    },
    onSwipedRight: () => {
      props.setIsOpen(true);
     navigate("/travaux/" + props.url)// Naviguer vers la route suivante après l'animation
    },
    swipeDuration: Infinity,
     // onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: true,
    trackMouse: true
  });



    const [open, setState] = React.useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
  <>
    
 

        <div {...handlers}>
  
{/* {props.trueboolroute ?  */} 
          <motion.div
        variants={NEXTRoute(props.isOpen)}
        initial="initial"
        animate="animate"
        
             
           
            >
  <div 
 
  className="central">
    <div className="central-pix">
      <img loading="eager" src={Data[9].pics[0]} className="pixHead" alt="nicocarmine" />
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
        
          <p className="text-content-titre">{Data[9].titre}</p>
          <p className="text-content-soustitre">{Data[9].subtitle}</p>
        

        <p className="text-content-credit">{Data[9].credit}</p>
      </div>
      <div className="text-right">
        <p className="text-content-des">{Data[9].desc}</p>
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
        <img loading="eager"
          key={index}
          src={pic}
          className={index === 0 ? "pixFirst" : "pix"}
          alt="nicocarmine"
        />
      ))}
      <img loading="eager" src={lastPics} className={"pixHead"} alt="nicocarmine" />
    </div>
  </div>
  

  <div className="divider-icon">
    <div className="divider2-white22" />
    <div className="lien-contact"onClick={() => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
    <div className="divider2-white22" style={{ marginLeft: "0px" }} />
  </div></motion.div>
</div>
</>

);
};
export default Travaux10;