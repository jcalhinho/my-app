import React from "react";
import "../index.css";
import {Button, Divider, Typography} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import Travaux from "./Travaux";
export default function Nicocarmine() {


    return (

        <motion.div className="container"
                    initial={{height: 0}}
                    animate={{height: "100%"}}
                    exit={{y: window.innerHeight , transition:{duration:0.8}}}
        >
            <div className="central-nicocarmine">
                <div className="column-nicocarmine" style={{display:"flex",flexDirection:"column"}}>
                    <h2 className="title-nicocarmine">nicocarmine</h2>
                    <div className="divider-icon">
                    <Divider className="divider1-white" />
                        <div className="icon-group">
                    <LinkedInIcon className="iconmui"  />
                            <LinkedInIcon className="iconmui"  /><InstagramIcon className="iconmui" /> </div>
                    </div>
                    <div className="central-text">Concepteur graphique pluridisciplinaire spécialisé dans l’identité de marque, l’édition et l’illustration. J’ai à cœur d’accompagner les marques et les institutions depuis leur réflexion stratégique jusqu’au design final dans le but qu’elles obtiennent la solution graphique la plus adéquate. J’aime développer des concepts explicites avec un design utile et accessible.</div>
                    <div className="divider-icon">
                        <Divider className="divider2-white" />
                        <a className="lien-contact" >contact@gmail.com</a>
                    </div>
                    <div className="groupbouton"><Link to="/travaux">
                        <Button className="button">
                            <div>

                            <ExpandMoreIcon className="iconButton" />
                            <div>click</div>
                            </div>
                        </Button></Link>
                    </div>
                   {/* <Travaux />*/}
                </div>
            </div>
        </motion.div>
    );
};