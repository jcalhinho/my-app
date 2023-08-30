import { AnimatePresence, motion, useAnimation, useMotionValue } from "framer-motion";

import React, {  useState } from "react";
import { FaBehanceSquare, FaLinkedin, FaInstagram } from "react-icons/fa";



// Import Swiper styles
import 'swiper/css';
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

import Contact from "./components/Contact";

import Nicocarmine from "./components/Nicocarmine";
import Travaux from "./components/Travaux";
import Travaux1 from "./components/Travaux1";
import Travaux10 from "./components/Travaux10";
import MenuIcon from "@mui/icons-material/Menu";
import Travaux20 from "./components/Travaux20";

import Travaux9 from "./components/Travaux9";

import "swiper/swiper-bundle.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Container,
  Toolbar,
  
  Drawer,
  
} from "@mui/material";

import Travaux2 from "./components/Travaux2";
import Travaux11 from "./components/Travaux11";
import Travaux12 from "./components/Travaux12";
import Travaux13 from "./components/Travaux13";
import Travaux14 from "./components/Travaux14";
import Travaux15 from "./components/Travaux15";
import Travaux16 from "./components/Travaux16";
import Travaux17 from "./components/Travaux17";
import Travaux18 from "./components/Travaux18";
import Travaux19 from "./components/Travaux19";
import Travaux3 from "./components/Travaux3";
import Travaux4 from "./components/Travaux4";
import Travaux5 from "./components/Travaux5";
import Travaux6 from "./components/Travaux6";
import Travaux7 from "./components/Travaux7";
import Travaux8 from "./components/Travaux8";
export const handleRouteChange = () => {
  window.scrollTo(0, 0);
};

export default function App() {
  const location = useLocation();
  const [isOpen,setIsOpen] = useState<boolean | null>(null)
  const url0 = location.pathname;
  const numero = parseInt(url0.slice(url0.lastIndexOf("/") + 1));

  let url: number | string = numero - 1;
  let url2: number | string = numero + 1;
  const [boolroute,setboolroute] = useState<boolean | null>(null)
  const [trueboolroute,settrueboolroute] = useState<boolean | null>(null)
  handleRouteChange();
  const calcurl = () => {
    
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
  //console.log(isOpen,"fleche")
  //console.log(boolroute,"swipe")
  function NEXTRoute() {
    
    if (isOpen) {
     
      const routeVariantstravauxnumber = {
        initial: { x: -window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
        // exit:{ transition: { duration: 1 },x:window.innerWidth}
      };
      return routeVariantstravauxnumber;
    } else if (!isOpen) {
      
      const routeVariantstravauxnumber = {
        initial: { x: window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },

      // exit:{ transition: { duration: 1 },x:-window.innerWidth}
      };
      return routeVariantstravauxnumber;
    }
    
  }
  function NEXTRoute2() {
      
   if (boolroute) {

      const routeVariantstravauxnumber = {
        initial: { x: window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
        // exit:{ transition: { duration: 1 },x:window.innerWidth}
      };
      return routeVariantstravauxnumber;
    } else if (!boolroute) {
      
      const routeVariantstravauxnumber = {
        initial: { x: -window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },

      // exit:{ transition: { duration: 1 },x:-window.innerWidth}
      };
      return routeVariantstravauxnumber;
    }
    
  }
  // Effectuer la navigation
  const x = useMotionValue(0);
  const scrollY = useMotionValue(0);
 
  const navigate=useNavigate(); 
  const controls = useAnimation();
  const handleGesture = (event, info) => {
    settrueboolroute(false);
    const swipeThreshold = 150; // Seuil de glissement en pixels
    
    if (info.offset.x <= swipeThreshold) {
      // Glissement vers setIsOpen(true)
      setboolroute(true);
      controls.start({ x: 0 }); // Animation pour sortir de l'écran à droite
      setTimeout(() => 
        navigate("/travaux/" + url2), 50);
       // Naviguer vers la route précédente après l'animation
    } else if (info.offset.x > swipeThreshold) {
      // Glissement vers la gauche (avance)
      setboolroute(false);
      controls.start({ x: info.point.x < 0 ? -200 : 200 }); // Animation pour sortir de l'écran à gauche
      setTimeout(() => navigate('/travaux/' + url), 50); // Naviguer vers la route suivante après l'animation
    }
  
  };

  const [open, setState] = useState(false);

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
  
  let startX = 0;
  let startY = 0;
  let isScrolling = false;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isScrolling = false;
    console.log(startX)
    console.log(startY)
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // if (!containerRef.current) return;

    const deltaX = Math.abs(e.touches[0].clientX - startX);
    const deltaY = Math.abs(e.touches[0].clientY - startY);

    if (deltaX < deltaY) {
      
     console.log('scrolling detected');
      isScrolling = true;
    }else {
      setboolroute(true);
    
      setTimeout(() => 
        navigate("/travaux/" + url2), 50);
        // setboolroute(false);
        
        // setTimeout(() => navigate('/travaux/' + url), 50); // Naviguer vers la route suivante après l'animation
      console.log('Horizontal swipe detected');
    }
  };

  const handleTouchEnd = () => {
    if (!isScrolling) {
      // Handle horizontal swipe action here
      console.log('Horizontal swipe detected');
    }
  };
  function Layout() {
    return (
      <div>
        <AppBar
          className="topappbar"
          style={{ display:"none",background: "black" }}
          position="static"
        >
          <Container className="appbar">
            <Toolbar>
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>

              <div onClick={toggleDrawer(true)}>
                <MenuIcon className="menuicon" />
              </div>

              {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
          className="topappbar"
          style={{ display:"none",background: "black" }}
          position="static"
        >
          <Container className="menuContainer">
            <Toolbar>
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>

              <div onClick={toggleDrawer(false)}>
              <CloseIcon
                            className="menuicon"
                            
                          />
              </div>

              {/* The outside of the drawer  */}
              
            </Toolbar>
           <div className="menuDivcentral">
            <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={toggleDrawer(false)} to="/travaux">travaux</Link></div>
            
           
            <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={toggleDrawer(false)} to="/contact">contact</Link></div>
            
                   
                
            </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                            <FaLinkedin className="iconmuiContact2"  /></Link>
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                <FaBehanceSquare className="iconmuiContact2" />
                </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
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
        </AppBar>
        <Outlet />
      </div>
    );
  }
  function Layout2() {
    if (location.pathname === "/travaux") {
      return (
        <div>
           <AppBar
          className="topappbar"
          style={{ display:"none",background: "black" }}
          position="static"
        >
          <Container  className="appbar3">
            <Toolbar>
              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>

              <div onClick={toggleDrawer(true)}>
                <MenuIcon className="menuicon" />
              </div>

              {/* The outside of the drawer  */}
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
                {/* The inside of the drawer  */}
                <AppBar
          className="topappbar"
          style={{ display:"none",background: "black" }}
          position="static"
        >
          <Container className="menuContainer">
            <Toolbar>
              <Link className="top-left-nico" onClick={()=>setState(false)} to="/">
                nicocarmine
              </Link>

              <div onClick={toggleDrawer(false)}>
              <CloseIcon
                            className="menuicon"
                            
                          />
              </div>

              {/* The outside of the drawer  */}
              
            </Toolbar>
           <div className="menuDivcentral">
            <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=> setState(false)} to="/travaux">travaux</Link></div>
            
           
            <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
            
                   
                
            </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                            <FaLinkedin className="iconmuiContact2"  /></Link>
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                <FaBehanceSquare className="iconmuiContact2" />
                </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
            <div className="icon-group4">
            <a className="lien-contact2" href="/">
          contact@nicocarmine.com
        </a></div>
          </Container>
        </AppBar>
              </Drawer>
            </Toolbar>
          </Container>
        </AppBar>
          {/* <div className="container"> */}
          <motion.div
    initial={{ y: window.innerHeight }}
    animate={{ y: 0, transition: { duration: 0.8 } }}
     exit={{opacity:0 , transition:{duration:0.8}}}
      
    >
            <div className="top-left" >
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
            location.pathname === "/travaux" ||
            location.pathname === "/contact" ? null : (
              <div id="link" className="top-left-icon">
                <Link to={"/travaux/" + url}></Link>
              </div>
            )
          }
          <motion.div
            initial={{ y: window.innerHeight }}
            animate={{ y: 0, transition: { duration: 0.8 } }}
             exit={{opacity:0 , transition:{duration:0.8}}}
          >
            <div className="top-right" >
              <div className="top-left-ensemble">
                <div className="top-left-travaux" >
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                <FaBehanceSquare className="iconmui" />
                </Link><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                            <FaLinkedin className="iconmui"  /></Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmui" style={{marginLeft:"0.1vw"}}/> </Link>
                  {/* <FaBehanceSquare className="iconmui" />
                  <FaLinkedin className="iconmui" />
                  <FaInstagram
                    className="icommui"
                    style={{
                      margin: "10px 10px 20px 0",
                      color: "white",
                      fontSize: "1.4vw",
                    }}
                  /> */}
                  <p style={{marginTop:"25px"}}>travaux{" "}</p>
                </div>
              </div>
            </div>
          </motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" ||
            location.pathname === "/contact" ? null : (
              <Link to={"/travaux/" + url2}>
                <div id="link" className="top-right-icon">
                  <p className="top-left-iconright"></p>
                </div>
              </Link>
            )
          }{" "}
          {/* </div> */}
          <Outlet />
        </div>
      );
    } else {
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
              {location.pathname === "/contact" ? (
                <Link className="top-left-contact" to="/contact">
                  contact
                </Link>
              ) : (
                <Link className="top-left-contact-white" to="/contact">
                  contact
                </Link>
              )}

              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
            </div>
          </div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact"
              ? null
              : null
          }
          <div className="top-right" >
            <div className="top-left-ensemble">
              {location.pathname === "/contact" ? (
                <Link className="top-left-travaux-white" to="/travaux">
                  travaux
                </Link>
              ) : (
                <Link className="top-left-travaux" to="/travaux">
                 travaux
                </Link>
              )}
            </div>
          </div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact"
              ? null
              : null
          }{" "}
          {/* </div> */}
          <Outlet />
        </div>
      );
    }
  }
  //   //console.log(navigate(-1));

  const routeVariantsnico = {
    initial: {
      opacity: 0,
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit: { opacity: 0 },
  };

  const routeVariantstravaux = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit: { opacity: 0 },
  };

 

  return (
    <div>
      
      <AnimatePresence >
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
                  <>
                    <Layout2 />
                    <Contact />
                  </>
                 </motion.div>
              }
            />
          </Route>

          <Route
            path="/travaux"
            element={
              <motion.div
                 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  
                >
                <Layout2 />
              </motion.div>
            }
          >
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

            <Route
              path={`/travaux/1`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      //             drag="x"
      // dragConstraints={{ left: -1000, right: 1000 }}
      //   onDrag={(e, { offset }) => {
      //   x.set(offset.x);
      // }}
                >
                  <Travaux1 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      //             drag="x"
      // dragConstraints={{ left: -1000, right: 1000 }}
      //   onDrag={(e, { offset }) => {
      //   x.set(offset.x);
    //  }}
                >
                  <Travaux1 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                
                </>
              }
            />
            <Route
              path={`/travaux/2`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000,top:0,bottom:0 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux2 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux2 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/3`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux3 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux3 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/4`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux4 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux4 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/5`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux5 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux5 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/6`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux6 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux6 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/7`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux7 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux7 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/8`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux8 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux8 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/9`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux9 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux9 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/10`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux10 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux10 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/11`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux11 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux11 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/12`}
              element={<>
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux12 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux12 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                  </>
                }
            />
            <Route
              path={`/travaux/13`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux13 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux13 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/14`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux14 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux14 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/15`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux15 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux15 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/16`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux16 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux16 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/17`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux17 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux17 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/18`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux18 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux18 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/19`}
              element={<>
              <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="appbar">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(true)}>
                      <MenuIcon className="menuicon" />
                    </div>
      
                    {/* The outside of the drawer  */}
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
                      {/* The inside of the drawer  */}
                      <AppBar
                className="topappbar"
                style={{ display:"none",background: "black" }}
                position="static"
              >
                <Container className="menuContainer">
                  <Toolbar>
                    <Link className="top-left-nico" to="/">
                      nicocarmine
                    </Link>
      
                    <div onClick={toggleDrawer(false)}>
                    <CloseIcon
                                  className="menuicon"
                                  
                                />
                    </div>
      
                    {/* The outside of the drawer  */}
                    
                  </Toolbar>
                 <div className="menuDivcentral">
                  <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                  
                 
                  <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                  
                         
                      
                  </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                  <FaLinkedin className="iconmuiContact2"  /></Link>
                      <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                      <FaBehanceSquare className="iconmuiContact2" />
                      </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                  <div className="icon-group4">
                  <a className="lien-contact2" href="/">
                contact@nicocarmine.com
              </a></div>
                </Container>
              </AppBar>
                    </Drawer>
                  </Toolbar>
                </Container>
              </AppBar>
              {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux19 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux19 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
            <Route
              path={`/travaux/20`}
              element={<>
                
                <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="appbar">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(true)}>
                        <MenuIcon className="menuicon" />
                      </div>
        
                      {/* The outside of the drawer  */}
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
                        {/* The inside of the drawer  */}
                        <AppBar
                  className="topappbar"
                  style={{ display:"none",background: "black" }}
                  position="static"
                >
                  <Container className="menuContainer">
                    <Toolbar>
                      <Link className="top-left-nico" to="/">
                        nicocarmine
                      </Link>
        
                      <div onClick={toggleDrawer(false)}>
                      <CloseIcon
                                    className="menuicon"
                                    
                                  />
                      </div>
        
                      {/* The outside of the drawer  */}
                      
                    </Toolbar>
                   <div className="menuDivcentral">
                    <div className="menuDivtext1"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/travaux">travaux</Link></div>
                    
                   
                    <div className="menuDivtext2"><Link className="top-left-contact-white" onClick={()=>setState(false)} to="/contact">contact</Link></div>
                    
                           
                        
                    </div><div className="icon-group3"><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                                    <FaLinkedin className="iconmuiContact2"  /></Link>
                        <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                        <FaBehanceSquare className="iconmuiContact2" />
                        </Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact2" /> </Link></div>
                    <div className="icon-group4">
                    <a className="lien-contact2" href="/">
                  contact@nicocarmine.com
                </a></div>
                  </Container>
                </AppBar>
                      </Drawer>
                    </Toolbar>
                  </Container>
                </AppBar>
                {trueboolroute ? 
              <motion.div
                  variants={NEXTRoute()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux20 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
              :  
              <motion.div
                  variants={NEXTRoute2()}
                  initial="initial"
                  animate="animate"
                  
                  drag="x"
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleGesture}  onDrag={(e, { offset }) => {
        x.set(offset.x);
      }}
                >
                  <Travaux20 isOpen={isOpen} settrueboolroute={settrueboolroute} setIsOpen={setIsOpen} url={url} url2={url2} />
                </motion.div>
            }
                </>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
      </div>
  );
}
