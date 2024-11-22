import "../styles/Banner.css";
import React from "react";
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import {motion} from 'framer-motion';

const heading = "ARZ Web Concept";
const paragraph = "Votre Vision, Notre Creation";

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

const Banner = () => {
    const headingChars = splitStringUsingRegex(heading);
    const paragraphChars = splitStringUsingRegex(paragraph);

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
                    {paragraphChars.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
            <button className="banner-contact">Contact.</button>
        </motion.div>
    );
}

export default Banner;