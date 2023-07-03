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


const Contact = () => {
  return (
    
    <div className="containerContact">
      <div className="divider-icon">
        <Divider className="divider2-white" />
    </div>  
    <div className="containerRow">
      <div style={{
        margin:"auto 0",
        fontSize:"30px", 
        fontWeight:"bold",
        fontFamily: "Outfit",
        fontStyle:"normal"}}>NICOLAS CARMINE </div>  
      <div style={{
        margin:"auto 0",
        fontSize:"20px", 
        fontWeight:"bold",
        fontFamily: "Outfit",
        fontStyle:"normal"}}>-</div>  
      <div style={{
        margin:"auto 0",
        fontSize:"20px", 
        fontWeight:"bold",
        fontFamily: "Outfit",
        fontStyle:"normal"}}>{""}contact@nicocarmine.com{" "}</div>  
      <div style={{
        margin:"auto 0",
        fontSize:"20px", 
        fontWeight:"bold",
        fontFamily: "Outfit",
        fontStyle:"normal"}}>-</div>  
      <div style={{
        margin:"auto 0",
        fontSize:"20px", 
        fontWeight:"bold",
        fontFamily: "Outfit",
        fontStyle:"normal"}}> 06 50 55 19 12</div>  
      </div>  
      <div className="divider-icon" style={{marginTop:"0"}}>
        <Divider className="divider2-white" />
    </div>
    {/* <div className="containerRow2">
      <div>EXPERTISE</div>  
      <div>CLIENTS</div>  
      <div></div>  
    </div> */}
    <div className="containerRow3">
      <div className="listcontact">
      <p style={{fontSize:"60px", fontWeight:"bold",
  fontFamily: "Futura",fontStyle:"normal",margin:"30px auto 30px auto"}}>EXPERTISE</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Direction artistique</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Illustration</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Edition</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Identité visuelle</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Charte graphique</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Naming</p>
        </div>  
      <div className="listcontact">
      <p style={{fontSize:"60px", fontWeight:"bold",
  fontFamily: "Futura",fontStyle:"normal",margin:"30px auto 30px 0"}}>CLIENTS</p>
        <p  style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px auto 10px 0"}}>Ville de Lyon</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Ville de Paris</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Biarritz Tourisme</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Ministere de l'économie</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>et des finances</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Eram</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Sanofi</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Senseo</p>
        
        </div>  
      <div className="listcontact">
      <p style={{fontSize:"60px", fontWeight:"bold",
  fontFamily: "Outfit",fontStyle:"normal", color:"black",margin:"30px auto 30px 0"}}> |</p>
      <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Casino</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Leroy Merlin</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Quick</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Mac Donald</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Institut Gustave Roussy</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Université Paris Sorbonne</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Université Paris Descartes</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>Hachette Livre</p>
        <p style={{fontSize:"30px", fontWeight:"lighter",lineHeight:"30px",
  fontFamily: "Inter",fontStyle:"normal", margin:"10px 0"}}>...</p>
        </div>  
    </div>
    <div className="containerRow2">
      <div>web: Jc Alhinho </div>  
      
    </div>
    <div className="divider-icon" style={{marginTop:"0", marginRight:"19%"}}>
        <Divider className="divider2-white" />
        <div className="icon-group">
                            <FaBehanceSquare className="iconmui" />
                            <FaLinkedin className="iconmui"  /><FaInstagram className="iconmui" /> </div>
    
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