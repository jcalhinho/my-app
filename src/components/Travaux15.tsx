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

const Travaux15 = (props) => {
  
  const dataWithoutFirst = Data[14].pics.slice(1);
  const lastPics = dataWithoutFirst.pop();

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
    {/* <AppBar
          className="topappbar"
          style={{ display: "none", background: "black" }}
          position="fixed"
        >
          <Container className="appbar3">
            <Toolbar>
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>

              <div onClick={toggleDrawer(true)}>
                <MenuIcon className="menuicon" />
              </div>

             
              <Drawer
                //from which side the drawer slides in
                anchor="right"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                // onOpen={toggleDrawer(true)}
              >
               
                <AppBar
                  className="appbar3"
                  style={{ display: "block", background: "black" }}
                  position="relative"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link
                        className="top-left-nico"
                        onClick={() => setState(false)}
                        to="/"
                      >
                        nicocarmine
                      </Link>

                      <div onClick={toggleDrawer(false)}>
                        <CloseIcon className="menuicon" />
                      </div>

                      
                    </Toolbar>
                    <div className="menuDivcentral">
                      <div className="menuDivtext1">
                        <Link
                          className="top-left-contact-white"
                          onClick={() => setState(false)}
                          to="/travaux"
                        >
                          travaux
                        </Link>
                      </div>

                      <div className="menuDivtext2">
                        <Link
                          className="top-left-contact-white"
                          onClick={() => setState(false)}
                          to="/contact"
                        >
                          contact
                        </Link>
                      </div>
                    </div>
                    <div className="icon-group3">
                      <Link
                        to={
                          "https://www.linkedin.com/in/nicolas-carmine-448b703a/"
                        }
                      >
                        <FaLinkedin className="iconmuiContact2" />
                      </Link>
                      <Link
                        to={"https://www.behance.net/nicocarmine?locale=fr_FR"}
                      >
                        <FaBehanceSquare className="iconmuiContact2" />
                      </Link>
                      <Link to={"https://www.instagram.com/nico.carmine/"}>
                        <FaInstagram className="iconmuiContact2" />{" "}
                      </Link>
                    </div>
                    <div className="icon-group4">
                      <a className="lien-contact2" href="/">
                        contact@nicocarmine.com
                      </a>
                    </div>
                  </Container>
                </AppBar>
              </Drawer>
            </Toolbar>
          </Container>
        </AppBar> */}

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
      <img loading="eager" src={Data[14].pics[0]} className="pixHead" alt="nicocarmine" />
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
        
          <p className="text-content-titre">{Data[14].titre}</p>
          <p className="text-content-soustitre">{Data[14].subtitle}</p>
        

        <p className="text-content-credit">{Data[14].credit}</p>
      </div>
      <div className="text-right">
        <p className="text-content-des">{Data[14].desc}</p>
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
    <div className="lien-contact"onClick={(e) => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
    <div className="divider2-white22" style={{ marginLeft: "0px" }} />
  </div></motion.div>
</div>
</>
);
};
export default Travaux15;