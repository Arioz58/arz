import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';

const buttonText = "Contact.";

const charGlowVariants = {
    hidden: {
        display: 'inline-block',
        opacity: 0,
        filter: 'blur(5px)',
        position: 'relative',
        willChange: 'filter, opacity, transform'
    },
    visible: {
        display: 'inline-block',
        opacity: 1,
        filter: 'blur(0px)',
        position: 'relative',
        transform: 'translateY(0px)',
        willChange: 'filter, opacity, transform',
        textShadow: '0 0 10px rgb(243, 251, 255), 0 0 20px rgb(255, 255, 255), 0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255)'
    },
    exit: {
        display: 'inline-block',
        opacity: 0,
        filter: 'blur(5px)',
        position: 'relative',
        willChange: 'filter, opacity, transform'
    }
}

const Footer = () => {
    const buttonChars = splitStringUsingRegex(buttonText);
    return (
        <div className="arz-footer" id="contact">
            <div className="slider">
                <div className="slide slide1"> 
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                </div>
                <div className="slide slide2"> 
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                    <p>Contactez-nous&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowDown} className="icon" />&nbsp;&nbsp;</p>
                </div>
            </div>
            <motion.button 
                className="banner-contact"
                initial='hidden' 
                whileInView='visible' 
            >
                Contact.
                <AnimatePresence>
                    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {buttonChars.map((char, index) => (
                            <motion.span
                            key={index} 
                            variants={charGlowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: index * 0.1, 
                                repeatDelay: 1.5, 
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                        ))}
                    </div>
                </AnimatePresence>
            </motion.button>
            <p className="cc">© 2021 ARZ Web Concept. All rights reserved.</p>
        </div>
    )
}

export default Footer;