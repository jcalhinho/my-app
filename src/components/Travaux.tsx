import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";




const Travaux = () => {



    return (
        <div>
        

                    <div className="central">
                    <div className="central-travaux">
                        {Data.map((pic, index) => (
                            <div key={index} className="thumb">
                               <Link to={`/travaux/${pic.id}`}><img src={pic.vignette} className="pixThumb" alt="" /></Link>
                                <p className="firstPixP">{pic.titre}</p>
                                <p className="secondPixP">{pic.subtitle}</p>
                            </div>
                        ))}




                    </div>
                </div>
 
            
                


            </div> 
    );
};
export default Travaux;