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

const Contact = () => {
  return (
      <motion.div className="container"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
      >
        <div className="container">
          <div className="top-left">
            <p className="top-left-contact">contact</p>
            <p className="top-left-nico">nicocarmine</p>
          </div>
          <div className="central">
            <div className="central-pix">
              <div className="pix"></div>
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
              <div className="divider"></div>

              <div className="pix"></div>
              <div className="pix"></div>
              <div className="pix"></div>
              <div className="pix"></div>
              <div className="pix"></div>
              <div className="pix"></div>
            </div>
          </div>

          <div className="top-right">
            <p className="top-left-travaux">travaux</p>
          </div>
        </div>
      </motion.div>
  );
};
export default Contact;