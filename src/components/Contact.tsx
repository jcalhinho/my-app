import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import pic from "../01-MR PAON/MR PAON_01.png";
import pic1 from "../01-MR PAON/MR PAON_02.png";
import pic2 from "../01-MR PAON/MR PAON_03.png";
import pic3 from "../01-MR PAON/MR PAON_04.png";
import pic4 from "../01-MR PAON/MR PAON_05.png";
import pic5 from "../01-MR PAON/MR PAON_06.png";
import {Divider} from "@mui/material";


const Contact = () => {
  return (
    
    <div className="containerContact">
      <div className="divider-icon">
        <Divider className="divider2-white" />
    </div>  
    <div className="containerRow">
      <div>NICOLAS CARMINE</div>  
      <div>- contact@nicocarmine.com -</div>  
      <div>06 50 55 19 12</div>  
      </div>  
      <div className="divider-icon">
        <Divider className="divider2-white" />
    </div>
    {/* <div className="containerRow2">
      <div>EXPERTISE</div>  
      <div>CLIENTS</div>  
      <div></div>  
    </div> */}
    <div className="containerRow3">
      <div className="listcontact">
      <p>EXPERTISE</p>
        <p>Direction artistique</p>
        <p>Illustration</p>
        <p>Edition</p>
        <p>Identité visuelle</p>
        <p>Charte graphique</p>
        <p>Naming</p>
        </div>  
      <div className="listcontact">
      <p>CLIENTS</p>
        <p>Ville de Lyon</p>
        <p>Ville de Paris</p>
        <p>Biarritz Tourisme</p>
        <p>Ministere de l'économie</p>
        <p>et des finances</p>
        <p>Eram</p>
        <p>Sanofi</p>
        <p>Senseo</p>
        
        </div>  
      <div className="listcontact">
      <p>   </p>
      <p>Casino</p>
        <p>Leroy Merlin</p>
        <p>Quick</p>
        <p>Mac Donald</p>
        <p>Institut Gustave Roussy</p>
        <p>Université Paris Sorbonne</p>
        <p>Université Paris Descartes</p>
        <p>Hachette Livre</p>
        <p>...</p>
        </div>  
    </div>
    <div className="containerRow2">
      <div>web: Jc Alhinho </div>  
      
    </div>
    <div className="divider-icon">
        <Divider className="divider2-white" />
    </div>
    
{/* 
{/*          
    // <div className="central">
    // <div className="central-travaux">
        




    // </div>
// </div> 
 <div className="divider-icon">
        <Divider className="divider2-white" />
        {/* <a className="lien-contact" href="/contact">contact@gmail.com</a>
    </div> */}




 </div> 

  );
};
export default Contact;