import React, { useEffect, useState } from 'react';
import "../styles/Header.css";
import Chat from "../assets/mobile_nav/Chat_Conversation.svg";
import Home from "../assets/mobile_nav/House_01.svg";
import Services from "../assets/mobile_nav/Handbag.svg";
import About from "../assets/mobile_nav/Info.svg";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            console.log(isMobile);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);
    
    return (
        isMobile ? (
            <header className="header">
                <nav className="mobile-nav">
                    <ul className= "mobile-menu">
                        <li>
                            <a href="#home"><img src={Home} alt="Home" /></a>
                        </li>
                        <li>
                            <a href="#about"><img src={About} alt="About" /></a>
                        </li>
                        <li>
                            <a href="#services"><img src={Services} alt="Services" /></a>
                        </li>
                        <li>
                            <a href="#contact"><img src={Chat} alt="Contact" /></a>
                        </li>
                    </ul>
                </nav>
            </header>
        ) : (
            <header className={`header ${isSticky ? 'sticky' : ''}`}>
                <nav>
                    <a href="#home">ARZ.</a>
                    <ul>
                        <li>
                            <a href="#home">Home.</a>
                        </li>
                        <li>
                            <a href="#about">About.</a>
                        </li>
                        <li>
                            <a href="#services">Services.</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    );
}

export default Header;