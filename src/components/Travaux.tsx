import * as React from "react";
import "../index.css";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";


const Travaux = () => {
    return (
        <motion.div className="container"
                    initial={{height: 0}}
                    animate={{height: "100%"}}

                    exit={{y: window.innerHeight , transition:{duration:0.8}}}
        >

                <div className="top-left">
                    <p className="top-left-contact">contact</p>
                    <p className="top-left-nico">nicocarmine</p>
                </div>
                    <div className="central">
                    <div className="central-travaux">
                        <div className="thumb">
                            <img
                            src="../pix/01-THUMB_Mr Paon.jpg"
                            alt="Grapefruit slice atop a pile of other slices" />
                        </div>
                        <div className="thumb">

                        </div>
                        <div className="thumb">

                        </div>
                        <div className="thumb">

                        </div>
                        <div className="thumb">

                        </div>
                        <div className="thumb">

                        </div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                        <div className="thumb"></div>
                    </div>
                </div>

                <div className="top-right">
                    <p className="top-left-travaux">travaux</p>
                </div>

        </motion.div>
    );
};
export default Travaux;