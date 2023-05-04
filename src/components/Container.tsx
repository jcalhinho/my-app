import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link, useLocation} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";
import Travaux from "./Travaux";
import { useEffect } from "react";




const Container = () => {
  const u =useLocation();
  const url0: number = parseInt(window.location.href.slice(30));
   let url: number | string = parseInt(window.location.href.slice(30)) -1;
  let url2: number | string = parseInt(window.location.href.slice(30))+1;

  const calcurl = () => {
if(url0 === 1 ){
url = 20;
url2 = 2;

  }
  if(url0 === 20 ){
    url = 19;
    url2 = 1;
    
      }
}
     
             
      calcurl();
          

console.log(u.pathname)


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
                { //Check if message failed
        (u.pathname === '/travaux')
          ? null
          : <Link  to={"/travaux/" + url}>
          <div id="link" className="top-left-icon">
            <p className="top-left-iconleft"><SlArrowLeft /></p>
          </div>
        </Link> 
      }
                
 

                <div className="top-right">
                <div className="top-left-ensemble">
                    <Link className="top-left-travaux" to="/travaux">travaux</Link>
                </div>
                </div>
                { //Check if message failed
        (u.pathname === '/travaux')
          ? null
          : <Link  to={"/travaux/" + url2}>
          <div id="link" className="top-right-icon">
            <p className="top-left-iconright"><SlArrowRight /></p>
          </div>
        </Link> 
      }


            {/* </motion.div>*/} </div> 
    );
};
export default Container;