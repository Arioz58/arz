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
        <div className="banner">
            <div className="banner-content">
                <motion.h1 initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}>
                    {headingChars.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p initial='hidden' whileInView='visible' transition={{staggerChildren: 0.05}}>
                    {paragraphChars.map((char, index) => (
                        <motion.span key={index} transition={{duration: 0.25}} variants={charVariants}>
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.p>
            </div>
        </div>
    );
}

export default Banner;