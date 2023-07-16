import * as React from "react";
import "../index.css";

// import { motion } from "framer-motion";
// import pic from "../01-MR PAON/MR PAON_01.png";
// import pic1 from "../01-MR PAON/MR PAON_02.png";
// import pic2 from "../01-MR PAON/MR PAON_03.png";
// import pic3 from "../01-MR PAON/MR PAON_04.png";
// import pic4 from "../01-MR PAON/MR PAON_05.png";
// import pic5 from "../01-MR PAON/MR PAON_06.png";
import {Divider} from "@mui/material";
import { FaBehanceSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    
    <div className="containerContact">
      
    <div className="containerRow">
      <div className="containerContactNico">NICOLAS CARMINE</div>  
      <div className="containerContactNico2">-</div>  
      <div className="containerContactNico3">{""}contact@nicocarmine.com{" "}</div>  
      <div className="containerContactNico2">-</div>  
      <div className="containerContactNico3"> 06 50 55 19 12</div>  
      </div>  
      
    {/* <div className="containerRow2">
      <div>EXPERTISE</div>  
      <div>CLIENTS</div>  
      <div></div>  
    </div> */}
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
    
    {/* <div className="divider-icon" style={{marginTop:"0", marginRight:"19%"}}>
        <Divider className="divider2-white" />
        <div className="icon-group">
                            <FaBehanceSquare className="iconmui" />
                            <FaLinkedin className="iconmui"  /><FaInstagram className="iconmui" /> </div>
    
        </div> */}
         <div className="divider-icon">
         <p style={{fontSize:"12px", fontWeight:"lighter",
  fontFamily: "Inter",fontStyle:"normal", margin:"15px 0",width:"fit-content"}}>dev:JcAlhinho</p>
                <div className="divider2-white22" />
                <div className="icon-group">
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                <FaBehanceSquare className="iconmui" />
                </Link><Link to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}>
                            <FaLinkedin className="iconmui"  /></Link><Link to={"https://www.instagram.com/nico.carmine/"}><FaInstagram className="iconmui" /> </Link></div>
                   
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