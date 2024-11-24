import "../styles/Services.css";
import React from "react";
import { motion } from "framer-motion";
import services_bg from "../assets/pawel-czerwinski-YAtspJ-HV2E-unsplash-scaled.jpg"
import arz_serv_phone from '../assets/arz-iphone-services.png';
import arz_serv_web from '../assets/arz-INdex.png';
import arz_serv_branding from '../assets/arz-palette.png';

const servicesVariants = {
    hidden: {
        opacity: 0,
        filter: "blur(30px)",
        scale: 0.9,
        transition: {
            duration: 0.3
        }
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

const Services = () => {
    return (
        <div className="arz-services" id="services">
            <div className="services-content">
                <img className="BG-services-img" src={services_bg} alt="BG"/>
                <div className="services-flex">
                    <h2>Services</h2>
                    <motion.div className="arz-service-grid" initial="hidden" whileInView="visible" transition={{staggerChildren: 0.2}}>
                        <motion.div className="arz-service back left" variants={servicesVariants} >
                            <p>App <br />iOS</p>
                            <img src={arz_serv_phone} alt="" />
                        </motion.div>
                        <motion.div className="arz-service" variants={servicesVariants} >
                            <p>Site web</p>
                            <img src={arz_serv_web} alt="" />
                        </motion.div>
                        <motion.div className="arz-service back right" variants={servicesVariants} >
                            <p>Branding</p>
                            <img src={arz_serv_branding} alt="" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Services;