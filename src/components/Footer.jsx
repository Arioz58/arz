import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_xd9dldt',
            'template_ftkuhyy',
            formData,
            'R6rTb6nJ9kmypEtCc'
        ).then(
            (result) => {
                setShowForm(false);
                setShowSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            },
            (error) => {
                console.log('Failed to send email:', error);
            }
        );
    };

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
            <AnimatePresence>
            {!showForm ? (
                <motion.button 
                    className="banner-contact"
                    initial='hidden' 
                    whileInView='visible'
                    onClick={() => setShowForm(true)}
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
            ) : (
                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    onSubmit={handleSubmit}
                >
                    <motion.input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <motion.input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <motion.textarea
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <div className="form-buttons">
                        <motion.button type="submit">Envoyer</motion.button>
                        <motion.button type="button" onClick={() => setShowForm(false)}>
                            Annuler
                        </motion.button>
                    </div>
                </motion.form>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {showSuccess && (
                <motion.div 
                className="success-message"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <motion.circle 
                        className="checkmark__circle" 
                        cx="26" 
                        cy="26" 
                        r="23" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.path
                        className="checkmark__check"
                        fill="none"
                        d="M15 27 l7 7 l15-15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    />
                </svg>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    Email envoyé avec succès! <br /> nous vous répondrons bientôt.
                </motion.p>
            </motion.div>
            )}
        </AnimatePresence>
        <p className="cc">© 2021 ARZ Web Concept. All rights reserved.</p>
        </div>
    )
}

export default Footer;