import * as React from "react";
import "../index.css";
import { motion } from "framer-motion";
import pic from "../pix/01-THUMB_MrPaon.jpg";
import pic1 from "../pix/02-THUMB_George Orwell.jpg";
import pic2 from "../pix/04-THUMB_Clipse.jpg";
import pic3 from "../pix/04-THUMB_Mon fils.jpg";
import pic4 from "../pix/05-THUMB_edition BMR.jpg";
import pic5 from "../pix/06-THUMB_Universite de Paris.jpg";
import pic6 from "../pix/07-THUMB_Soli Solol Soli.jpg";
import pic7 from "../pix/08-THUMB_Relyon.nous.jpg";
import pic8 from "../pix/09-THUMB_Hurikat.jpg";
import pic9 from "../pix/10-THUMB_Arsene Lupiupn.jpg";
import pic10 from "../pix/11-THUMB_EUX IMPRO.jpg";
import pic11 from "../pix/12-THUMB_HMpartners.jpg";
import pic12 from "../pix/13-THUMB_Livre de poche jeunesse.jpg";
import pic13 from "../pix/14-THUMB_Mairie de Paaris.jpg";
import pic14 from "../pix/15-THUMB_Casalib.jpg";
import pic15 from "../pix/16-THUMB_off jazz.jpg";
import pic16 from "../pix/17-THUMB_Athemium.jpg";
import pic17 from "../pix/18-THUMB_Biarritz.jpg";
import pic18 from "../pix/19-THUMB_Smatch.jpg";
import pic19 from "../pix/20-THUMB_Pelicafe.jpg";
import {Link} from "react-router-dom";




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
                            <Link to="/travaux/1"><img src={pic} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">MONSIEUR PAON</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>

                        <div className="thumb">
                            <Link to="/travaux/2"><img src={pic1} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">GEORGE ORWEL</p>
                            <p className="secondPixP">Edition</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/3"><img src={pic2} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">CLIPSE</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/4"><img src={pic3} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">MON FILS</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/5"><img src={pic4} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">BMR</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/6"><img src={pic5} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">ISSA</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/7"><img src={pic6} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">SOLI SOL SOL</p>
                            <p className="secondPixP"> Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/8"><img src={pic7} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">RE LYON NOUS</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/9"><img src={pic8} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">HURIKAT</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/10"><img src={pic9} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">ARSÈNE LUPIN</p>
                            <p className="secondPixP">Edition</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/11"><img src={pic10} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">Compagnie EUX</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>

                        <div className="thumb">
                            <Link to="/travaux/12"><img src={pic11} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">HM PARTNERS</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/13"><img src={pic12} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">LE LIVRE DE POCHE JEUNESSE</p>
                            <p className="secondPixP">Edition</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/14"><img src={pic13} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">MAIRIE DE PARIS</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/15"><img src={pic14} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">CASALIB</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/16"><img src={pic15} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">L’OFF JAZZ</p>
                            <p className="secondPixP">Evénement culturel</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/17"><img src={pic16} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">ATHEMIUM</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/18"><img src={pic17} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">BIARRITZ</p>
                            <p className="secondPixP">Edition</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/19"><img src={pic18} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">SMATCH</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>
                        <div className="thumb">
                            <Link to="/travaux/20"><img src={pic19} className="pixThumb" alt="" /></Link>
                            <p className="firstPixP">PELICAFE</p>
                            <p className="secondPixP">Identité de marque</p>
                        </div>


                    </div>
                </div>

                <div className="top-right">
                    <p className="top-left-travaux">travaux</p>
                </div>

        </motion.div>
    );
};
export default Travaux;