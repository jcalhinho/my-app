import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";
import Travaux from "./Travaux";




const Container = () => {



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
                <Link to="/travaux/1">
            <div className="top-left-icon">
              <p className="top-left-iconleft"><SlArrowLeft /></p>
            </div>
          </Link>
 {/* <Travaux /> */}

                <div className="top-right">
                <div className="top-left-ensemble">
                    <Link className="top-left-travaux" to="/travaux">travaux</Link>
                </div>
                </div>
                <Link to="/travaux/3">
            <div className="top-right-icon">
              <p className="top-left-iconright"><SlArrowRight /></p>
            </div>
          </Link>


            {/* </motion.div>*/} </div> 
    );
};
export default Container;