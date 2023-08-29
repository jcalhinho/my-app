import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";
import { Divider } from "@mui/material";
import { handleRouteChange } from "../App";




const Travaux = () => {

    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return (
        <div>
         
         
                    <div className="central">
                    <div className="central-travaux">
                        {Data.map((pic, index) => (
                            <div key={index} className="thumb">
                               <Link to={`/travaux/${pic.id}`}><img src={pic.vignette} className="pixThumb" alt="" /></Link>
                                <p className="firstPixP">{pic.titre}</p>
                                <p className="secondPixP">{pic.type}</p>
                            </div>
                        ))}




                    </div>
                </div>
                <div className="divider-icon">
                <div className="divider2-white22" />
                    <a className="lien-contact" href="/">contact@nicocarmine.com</a>
                   
                </div>
                   
            
                


            </div> 
    );
};
export default Travaux;