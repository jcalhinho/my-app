import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";

import {Link} from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Data} from "../data";
import { Divider } from "@mui/material";
import { handleRouteChange } from "../App";
import { FaBehanceSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const routeVariantstravaux = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      transition: { duration: 0.8 },
      opacity: 1,
      x: "0%",
      y: "0%",
    },
    exit: { opacity: 0 },
  };


const Travaux = () => {

    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return (
        <div>
            <motion.div
                  variants={routeVariantstravaux}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
          <div className="top-left">
            <div className="top-left-ensemble">
              <Link className="top-left-contact-white" to="/contact">
                contact
              </Link>

              <Link className="top-left-nico" to="/">
                nicocarmine
              </Link>
            </div>
          </div>
         
                    <div className="central">
                    <div className="central-travaux">
                        {Data.map((pic, index) => (
                            <div key={index} className="thumb">
                               <Link to={`/travaux/${pic.id}`}><img src={pic.vignette} className="pixThumb" alt="" /></Link>
                                <p className="firstPixP">{pic.titre}</p>
                                <p className="secondPixP">{pic.type}</p>
                            </div>
                        ))}



                    </div><div className="top-right">
            <div className="top-left-ensemble">
              <div className="top-left-travaux">
                <Link to={"https://www.behance.net/nicocarmine?locale=fr_FR"}>
                  <FaBehanceSquare className="iconmui" />
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/nicolas-carmine-448b703a/"}
                >
                  <FaLinkedin className="iconmui" />
                </Link>
                <Link to={"https://www.instagram.com/nico.carmine/"}>
                  <FaInstagram
                    className="iconmui"
                    style={{ marginLeft: "0.1vw" }}
                  />{" "}
                </Link>
                {/* <FaBehanceSquare className="iconmui" />
                  <FaLinkedin className="iconmui" />
                  <FaInstagram
                    className="icommui"
                    style={{
                      margin: "10px 10px 20px 0",
                      color: "white",
                      fontSize: "1.4vw",
                    }}
                  /> */}
                <p style={{ marginTop: "25px" }}>travaux </p>
              </div>
            </div>
          </div>

                </div>
                <div className="divider-icon">
                <div className="divider2-white22" />
                <div className="lien-contact"onClick={(e) => {window.location.href ='mailto:contact@nicocarmine.com';}}>contact@nicocarmine.com</div>
                   
                </div>
                   
            
                
                </motion.div>

            </div> 
    );
};
export default Travaux;