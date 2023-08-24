import { AnimatePresence,  motion } from "framer-motion";
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
import SearchIcon from "@mui/icons-material/Search";
import Contact from "./components/Contact";
import logobenance from "../pix/behance-svgrepo-com.svg";
import Nicocarmine from "./components/Nicocarmine";
import Travaux from "./components/Travaux";
import Travaux1 from "./components/Travaux1";
import Travaux10 from "./components/Travaux10";
import MenuIcon from "@mui/icons-material/Menu";
import Travaux20 from "./components/Travaux20";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import Travaux9 from "./components/Travaux9";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Container, Toolbar, Typography, IconButton, Drawer, Divider, ListItemButton, ListItemIcon, ListItemText, Button, Box, styled, alpha, InputBase } from "@mui/material";
export const handleRouteChange = () => {
  window.scrollTo(0,0);
};
const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);
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

  
  console.log(window.innerWidth)

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
  function Layout() {
    return (
      <div>
        <AppBar className="topappbar" style={{background:"black"}}position="static">
      <Container className="appbar">
        <Toolbar>
         
          <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
         

          

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "block"
              }
            }}
          >
            <MenuIcon />
          </IconButton>

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
            <Box
              sx={{
                p: 2,
                height: 1,
                color:"#FFF"
              }}
            >
               {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false  */}
              <IconButton sx={{ mb: 2,color:"#FFF" }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2,color:"#FFF" }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ImageIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="TRAVAUX" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="CONTACT" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Other" />
                </ListItemButton>
              </Box>

              {search}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}
              >
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar> 
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
                           exit={{opacity:0 , transition:{duration:0.8}}}
                            
                         
    
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
              
                <div id="link" className="top-left-icon">
                  
                  <Link to={"/travaux/" + url}></Link>
                  
                </div>
              
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
                <FaInstagram  className="icommui" style={{margin:"10px 10px 20px 0", color:"white",fontSize: "1.4vw"}} />
                travaux{" "}
              </Link>



            </div>
          </div>
          </motion.div>
          {
            //Check if message failed
            location.pathname === "/travaux" || location.pathname === "/contact" ? null : (
              <Link  to={"/travaux/" + url2}>
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
