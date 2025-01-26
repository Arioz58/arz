import "../styles/Services.css";
import {React} from "react";
import { motion } from "framer-motion";
import services_bg from "../assets/services.png";
import arz_serv_phone from '../assets/arz-iphone-services.png';
import arz_serv_temp from '../assets/template.png';
import arz_serv_branding from '../assets/arz-palette.png';
import ARZ from "../assets/logo-arz.svg";

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

const servicesList = [
    {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications",
        image: arz_serv_phone
    },
    {
        title: "Web Development",
        description: "Modern and responsive websites",
        image: arz_serv_temp
    },
    {
        title: "Branding",
        description: "Brand identity and design",
        image: arz_serv_branding
    }
];

const Services = () => {

    return (
        <div className="arz-services" id="services">
            <motion.div 
                className="bg-container"
                variants={servicesVariants}
                initial="hidden"
                whileInView="visible"
            >   
                <motion.div 
                    className="services-flex" 
                    initial="hidden" 
                    whileInView="visible" 
                    transition={{staggerChildren: 0.2}}
                >
                    <h2>Services.</h2>
                    <div className="card">
                        <img src={ARZ} alt="logo" className="logo"/>
                        <h3 className="card-title">Web Development</h3>
                        <img src={arz_serv_temp} alt="" />
                    </div>
                </motion.div>
                <img className="bg" src={services_bg} alt="services background" />
            </motion.div>
        </div>
    );
}

export default Services;