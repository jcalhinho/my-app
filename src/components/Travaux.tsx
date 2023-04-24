import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";




const Travaux = () => {



    return (
        <div className="container">
            {/* <motion.div className="container"
                        initial={{height: 0}}
                        animate={{height:"100%"}}
                        exit={{y: window.innerHeight , transition:{duration:0.6}}}

            > */}

                <div className="top-left">
                    <div className="top-left-ensemble">
                    <Link className="top-left-contact" to="/contact">contact</Link>
                    <Link className="top-left-nico" to="/">nicocarmine</Link>
                    </div>

                </div>

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

                <div className="top-right">
                <div className="top-left-ensemble">
                    <Link className="top-left-travaux" to="/travaux">travaux</Link>
                </div>
                </div>


            {/* </motion.div>  */}
            </div>
    );
};
export default Travaux;