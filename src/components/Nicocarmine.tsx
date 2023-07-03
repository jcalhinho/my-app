import React, { useEffect } from "react";
import "../index.css";
import {Button, Divider, Typography} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import { useDetectScroll } from "@smakss/react-scroll-direction";


import Travaux from "./Travaux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaBehanceSquare, FaInstagram, FaLinkedin} from "react-icons/fa";
import {SlArrowDown} from "react-icons/sl";
//import Container from "./Container";


export default function Nicocarmine() {
   const [scrollDir] = useDetectScroll({});
   const history = useNavigate();
   
   

   useEffect(() => {
if(scrollDir === "down") {
   history("/travaux");
   }
   },[history, scrollDir])
   



    return (<>

<div id="sectionInterdite">
            <div className="central-nicocarmine">
                <div >
                <div className="column-nicocarmine" style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <h2 className="title-nicocarmine" style={{fontSize:"60px", fontWeight:"bold",
                    fontFamily: "Futura",fontStyle:"normal"}}>nicocarmine</h2>
                   
                   <Divider className="divider2-white22" />
                        <a className="lien-contact" href="/">contact@gmail.com</a>
                    </div>
                        
                   </div>
                </div>

                    <div className="central-text">Concepteur graphique pluridisciplinaire spécialisé dans l’identité de marque, l’édition et
l’illustration, j’aime développer des concepts explicites avec un design utile et accessible.</div> <div className="central-text">
De plus, j’ai à cœur d’accompagner les marques et les institutions, depuis leur réflexion
stratégique jusqu’au design final, dans le but qu’elles obtiennent la solution graphique la
plus adéquate.</div>
                    <div className="divider-icon">
                        
                    <div className="groupbouton">
                        <Link to="/travaux">
                        <Button className="button">
                            <div>

                            <SlArrowDown className="iconButton" />
                            
                            </div>
                        </Button>
                        </Link>
                    </div>
                    </div>
                   
                </div>
            </div>
            </> 
    );
};


