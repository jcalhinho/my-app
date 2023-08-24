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
import { TfiAngleDown } from "react-icons/tfi";

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


            <div className="central-nicocarmine">
               
                <div className="column-nicocarmine" >
                    <h2 className="title-nicocarmine" >nicocarmine</h2>
                   <div className="divider2-white22" />
                    <a className="lien-contact" href="/">contact@nicocarmine.com</a>
                   
                </div>
                
<div className="doublepara">
                    <div className="central-text">Concepteur graphique pluridisciplinaire spécialisé dans l’identité de marque, l’édition et
l’illustration, j’aime développer des concepts explicites avec un design utile et accessible.</div> <div className="central-text" style={{paddingTop:"4vh"}}>
De plus, j’ai à cœur d’accompagner les marques et les institutions, depuis leur réflexion
stratégique jusqu’au design final, dans le but qu’elles obtiennent la solution graphique la
plus adéquate.</div></div>
                    <div className="divider-icon">
                        
                    <div className="groupbouton">
                        <Link to="/travaux">
                        <Button className="button">
                            <div className="iconButton">

                            
                            
                            </div>
                        </Button>
                        </Link>
                    </div>
                    </div>
                   
                </div>
           
            </> 
    );
};


