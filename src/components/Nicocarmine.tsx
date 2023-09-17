import React, { useEffect } from "react";
import "../index.css";
import {Button, Divider, Typography} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {Link} from "react-router-dom";




export default function Nicocarmine() {

   
   

  
   



    return (<>


            <div className="central-nicocarmine">
               
                <div className="column-nicocarmine" >
                    <h2 className="title-nicocarmine" >nicocarmine</h2>
                   <div className="divider2-white22" />
                    <div className="lien-contact"onClick={(e) => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
                   
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


