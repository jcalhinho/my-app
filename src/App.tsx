import { AnimatePresence, motion } from "framer-motion";
import { url } from "inspector";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaBehanceSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import Contact from "./components/Contact";
import logobenance from "../pix/behance-svgrepo-com.svg";
import Nicocarmine from "./components/Nicocarmine";
import Travaux from "./components/Travaux";
import Travaux1 from "./components/Travaux1";
import Travaux10 from "./components/Travaux10";
import Travaux11 from "./components/Travaux11";
import Travaux12 from "./components/Travaux12";
import Travaux13 from "./components/Travaux13";
import Travaux14 from "./components/Travaux14";
import Travaux15 from "./components/Travaux15";
import Travaux16 from "./components/Travaux16";
import Travaux17 from "./components/Travaux17";
import Travaux18 from "./components/Travaux18";
import Travaux19 from "./components/Travaux19";
import Travaux2 from "./components/Travaux2";
import Travaux20 from "./components/Travaux20";
import Travaux3 from "./components/Travaux3";
import Travaux4 from "./components/Travaux4";
import Travaux5 from "./components/Travaux5";
import Travaux6 from "./components/Travaux6";
import Travaux7 from "./components/Travaux7";
import Travaux8 from "./components/Travaux8";
import Travaux9 from "./components/Travaux9";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
export const handleRouteChange = () => {
  window.scrollTo(0,0);
};
export default function App() {
  const location = useLocation();
const [nextRoute,setnextRoute] =useState(true);
const url0 = location.pathname;
const numero = parseInt(url0.slice(url0.lastIndexOf('/') + 1));
  
  let url: number | string = numero - 1;
  let url2: number | string = numero + 1;

handleRouteChange();
  const calcurl = () => {
    console.log(url2)
    if (numero === 1) {
      url = 20;
      url2 = 2;
    }


    if (numero === 20) {
      url = 19;
      url2 = 1;
    }
  };
  calcurl();

  
  

 
  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  function Layout2() {
    if(location.pathname === "/travaux"){
       return (
      <div>
        {/* <div className="container"> */}
          <motion.div 
                           initial={{y:window.innerHeight}}
                            animate={{y: 0 , transition:{duration:0.8}}}
                          //  exit={{opacity:0 , transition:{duration:0.8}}}
                            
                         
    
                >
          <div className="top-left">
            <div className="top-left-ensemble">


<Link className="top-left-contact-white" to="/contact">
                contact
              </Link>




              


              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
            </div>
            
          </div>
          </motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
              <Link to={"/travaux/" + url}>
                <div id="link" className="top-left-icon">
                  <p className="top-left-iconleft">
                 
                  </p>
                </div>
              </Link>
            )
          }

          <motion.div 
                          initial={{y:window.innerHeight}}
                          animate={{y: 0 , transition:{duration:0.8}}}
                        //  exit={{opacity:0 , transition:{duration:0.8}}}
                >
           <div className="top-right">
            <div className="top-left-ensemble">



              <Link className="top-left-travaux" to="/travaux">
                <FaBehanceSquare  className="iconmui" />
                <FaLinkedin  className="iconmui" />
                <FaInstagram  className="icommui" style={{margin:"10px 10px 20px 0", color:"white",fontSize: "25px"}} />
                travaux{" "}
              </Link>



            </div>
          </div>
          </motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
              <Link to={"/travaux/" + url2}>
                <div id="link" className="top-right-icon">
                  <p className="top-left-iconright">
                  
                  </p>
                </div>
              </Link>
            )
          }
         
          {" "}
        {/* </div> */}

        <Outlet />
      </div>
    );
    }
    
    else {
      return (
        <div>
          {/* <div className="container"> */}
          <div className="top-left">
            <div className="top-left-ensemble">
            {/* <BurgerNav>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            
        </BurgerNav> */}
              {location.pathname === "/contact" ? <Link className="top-left-contact" to="/contact">
                contact
              </Link> 
              :<Link className="top-left-contact-white" to="/contact">
                contact
              </Link>
              }
              
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
            </div>
          </div>
          {
            //Check if message failed
            location.pathname === "/travaux" ||
            location.pathname === "/contact" ? null : (
              null
            )
          }
          <div className="top-right">
            <div className="top-left-ensemble">
            {location.pathname === "/contact" ? <Link className="top-left-travaux-white" to="/travaux">
                travaux
              </Link>
              :<Link className="top-left-travaux" to="/travaux">
              travaux
            </Link>
              }

            
            </div>
          </div>
          {
            //Check if message failed
            location.pathname === "/travaux" ||
            location.pathname === "/contact" ? null : (
              null
            )
          }{" "}
          {/* </div> */}
          <Outlet />
        </div>
      );
    }
   
  }
  //   console.log(navigate(-1));
  
  const routeVariantsnico = {
    initial: {
      opacity:0,
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
     exit:{ opacity:0,}
  };
 
  const routeVariantstravaux = {
    initial: {
      opacity:0,
      y:"100%"
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit:{opacity:0}
  };
  
  
  function NEXTRoute() {
if(nextRoute){
 
    const routeVariantstravauxnumber = {
      initial:{x:-window.innerWidth}, 
      animate: {
        transition: { duration: 1 },
        opacity: 1,
        x: 0,
        y: 0,
      },
     // exit:{ transition: { duration: 1 },x:window.innerWidth}
    };
    return routeVariantstravauxnumber
}else {
  
  const routeVariantstravauxnumber = {
    initial:{x:window.innerWidth}, 
    animate: {
      transition: { duration: 1 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
   // exit:{ transition: { duration: 1 },x:-window.innerWidth}
  };
  return routeVariantstravauxnumber
}
   
    

  }
  
  return (
    <div>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <motion.div
                variants={routeVariantsnico}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Nicocarmine />
                </motion.div>
              }
            />
            <Route
             path="/contact"
              element={
                <motion.div
                variants={routeVariantsnico}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <><Layout2 /><Contact /></>
                </motion.div>
              }
            />
          </Route>

          <Route path="/travaux" element={<motion.div
                
                ><Layout2 /></motion.div>}>
            <Route
              index
              element={
                <motion.div
                variants={routeVariantstravaux}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Travaux />
                </motion.div>
              }
            />

            
              <Route path={`/travaux/1`} element={
              <motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" >
                <Travaux1 url={url} url2={url2} />
              </motion.div>}
              />
              <Route path={`/travaux/2`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/3`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/4`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/5`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/6`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/7`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/8`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux1 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/9`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux9 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/10`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/11`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/12`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/13`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/14`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/15`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/16`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/17`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/18`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/19`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux10 url={url} url2={url2} /></motion.div>}/>
              <Route path={`/travaux/20`} element={<motion.div variants={NEXTRoute()} initial="initial"animate="animate"exit="exit" ><Travaux20 url={url} url2={url2} /></motion.div>}/>

                  
                    
                    
                    
                 
                    
                  
                
              
            
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
