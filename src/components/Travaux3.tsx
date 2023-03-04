import * as React from "react";
import "../index.css";

import { motion } from "framer-motion";
import pic from "../03-CLIPSE/CLIPSE_01.jpg";
import pic1 from "../03-CLIPSE/CLIPSE_02.jpg";
import pic2 from "../03-CLIPSE/CLIPSE_03.jpg";
import pic3 from "../03-CLIPSE/CLIPSE_04.jpg";
import pic4 from "../03-CLIPSE/CLIPSE_05.jpg";
import pic5 from "../03-CLIPSE/CLIPSE_06.jpg";
import pic6 from "../03-CLIPSE/CLIPSE_07.jpg";
import pic7 from "../03-CLIPSE/CLIPSE_08.jpg";
import pic8 from "../03-CLIPSE/CLIPSE_09.jpg";
import {Button, Divider} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Travaux3 = () => {
    return (
        <motion.div className="container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration:1}}}
                    exit={{opacity: 0}}
        >
            <div className="container">
                <div className="top-left">
                    <p className="top-left-contact">contact</p>
                    <p className="top-left-nico">nicocarmine</p>
                </div> <div className="top-leftB">
                <Link to="/travaux/2">
                    <Button className="button">
                        <div>

                            <ArrowBackIosIcon className="iconButton" />

                        </div>
                    </Button></Link>
            </div>
                <div className="top-rightB">
                    <Link to="/travaux/4">
                        <Button className="button">
                            <div>

                                <ArrowForwardIosIcon className="iconButton" />

                            </div>
                        </Button></Link>
                </div>
                <div className="central">
                    <div className="central-pix">
                        <img src={pic} className="pix" alt="" />
                        <div className="text">
                            <div className="text-left">
                                <p className="text-content">
                                    It's always a hassle to correctly position a rotated text.
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-content">
                                    It's always a hassle to correctly position a rotated text.
                                    width or height is needed (hover to change the text direction)
                                </p>
                            </div>
                        </div>
                        <Divider className="divider1-white2" />
                        <img src={pic1} className="pixFirst" alt="" />
                        <img src={pic2} className="pix" alt="" />
                        <img src={pic3} className="pix" alt="" />
                        <img src={pic4} className="pix" alt="" />
                        <img src={pic5} className="pix" alt="" />
                        <img src={pic6} className="pix" alt="" />
                        <img src={pic7} className="pix" alt="" />
                        <img src={pic8} className="pix" alt="" />


                    </div>
                </div>

                <div className="top-right">
                    <p className="top-left-travaux">travaux</p>
                </div>
            </div>
        </motion.div>
    );
};
export default Travaux3;