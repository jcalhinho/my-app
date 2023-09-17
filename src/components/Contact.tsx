import * as React from "react";
import "../index.css";


import {Divider} from "@mui/material";
import { FaBehanceSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    
    <div className="containerContact">
      
    <div className="containerRow">
      <p className="containerContactNico">NICOLAS CARMINE</p>  
      <p className="containerContactNico2"></p>  
      <p className="containerContactNico3">{""}contact@nicocarmine.com{" "}</p>  
      <p className="containerContactNico2"></p>  
      <p className="containerContactNico3"> 06 50 55 19 12</p>  
      </div>  
  
    <div className="containerRow3">
      <div className="listcontact">
      <p className="containerContactexpertise">EXPERTISE</p>
        <p className="containerContactlist">Direction artistique</p>
        <p className="containerContactlist">Illustration</p>
        <p className="containerContactlist">Edition</p>
        <p className="containerContactlist">Identité visuelle</p>
        <p className="containerContactlist">Charte graphique</p>
        <p className="containerContactlist">Naming</p>
        </div>  
      <div className="listcontact">
      <p className="containerContactclient">CLIENTS</p>
        <p  className="containerContactlist">Ville de Lyon</p>
        <p className="containerContactlist">Ville de Paris</p>
        <p className="containerContactlist">Biarritz Tourisme</p>
        <p className="containerContactlist">Ministere de l'économie</p>
        <p className="containerContactlist">et des finances</p>
        <p className="containerContactlist">Eram</p>
        <p className="containerContactlist">Sanofi</p>
        <p className="containerContactlist">Senseo</p>
        
        </div>  
      <div className="listcontact">
      <p className="containerContactrien"> |</p>
      <p className="containerContactlist">Casino</p>
        <p className="containerContactlist">Leroy Merlin</p>
        <p className="containerContactlist">Quick</p>
        <p className="containerContactlist">Mac Donald</p>
        <p className="containerContactlist">Institut Gustave Roussy</p>
        <p className="containerContactlist">Université Paris Sorbonne</p>
        <p className="containerContactlist">Université Paris Descartes</p>
        <p className="containerContactlist">Hachette Livre</p>
        <p className="containerContactlist">...</p>
        </div>  
    </div>
    
   
         <div className="divider-icon">
         
                <div className="divider2-white222">
                <div className="groupicon"><p className="pgroupicon">dev:Jc Alhinho</p></div>
                <div className="icon-group2">
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                <FaBehanceSquare className="iconmuiContact" />
                </Link><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                            <FaLinkedin className="iconmuiContact"  /></Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmuiContact" style={{marginLeft:"0.1vw"}}/> </Link></div>
                   
                </div>
                </div>
                
    




 </div> 

  );
};
export default Contact;