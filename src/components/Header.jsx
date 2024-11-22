import React, { useRef, useEffect, useState } from 'react';
import "../styles/Header.css";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`header ${isSticky ? 'sticky':''}`}>
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
    );
}

export default Header;