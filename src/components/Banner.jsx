import "../styles/Banner.css";
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import {motion, AnimatePresence} from 'framer-motion';
import { React , useState } from 'react';
import emailjs from '@emailjs/browser';

const heading = "ARZ Web Concept";
const paragraph1 = "Votre Vision,";
const paragraph2 = "Notre Creation.";
const buttonText = "Contact.";

const charVariants = {
    hidden: {
        display: 'inline-block',
        opacity: 0,
        filter: 'blur(5px)',
        position: 'relative',
        transform: 'translateY(10px)',
        willChange: 'filter, opacity, transform'
    },
    visible: {
        display: 'inline-block',
        opacity: 1,
        filter: 'blur(0px)',
        position: 'relative',
        transform: 'translateY(0px)',
        willChange: 'filter, opacity, transform'
    }
}

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


const Banner = () => {
    const headingChars = splitStringUsingRegex(heading);
    const paragraphChars1 = splitStringUsingRegex(paragraph1);
    const paragraphChars2 = splitStringUsingRegex(paragraph2);
    const buttonChars = splitStringUsingRegex(buttonText);

    const [showForm, setShowForm] = useState(false);
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
                console.log('Email sent successfully');
                setShowForm(false);
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.log('Failed to send email:', error);
            }
        );
    };

    return (
        <motion.div
            className="banner"
            id="home"
            initial={{ background: 'radial-gradient(circle farthest-corner at center 250%, #000000 75%, #000000 85%, #000000 95%)' }}
            animate={{ background: 'radial-gradient(circle farthest-corner at center 250%, #000000 75%, #001fb9 85%, #00aaff 95%)' }}
            transition={{ duration: 3, ease: "easeInOut" }}
        >
            <div className="banner-content">
                <motion.h1 initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}>
                    {headingChars.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05, delayChildren: 0.7}}>
                    {paragraphChars1.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.p>
                <motion.p initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05, delayChildren: 1.4}}>
                    {paragraphChars2.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.p>
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
                            <motion.button type="submit">Send</motion.button>
                            <motion.button type="button" onClick={() => setShowForm(false)}>
                                Cancel
                            </motion.button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Banner;