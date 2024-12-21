import "../styles/Services.css";
import React from "react";
import { motion } from "framer-motion";
import services_bg from "../assets/services.png";
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
            <div className="bg-center">
                <h2>Services</h2>
                <motion.div className="services-flex" initial="hidden" whileInView="visible" transition={{staggerChildren: 0.2}}>
                    <motion.div className="arz-service back left" variants={servicesVariants} >
                        <p>phone</p>
                    </motion.div>
                    <motion.div className="arz-service" variants={servicesVariants} >
                        <p>phone</p>
                    </motion.div>
                    <motion.div className="arz-service back right" variants={servicesVariants} >
                        <p>phone</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Services;