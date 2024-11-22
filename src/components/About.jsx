import "../styles/About.css";
import ARZmap from "../assets/ARZ-map.png";
import ARZphone from "../assets/ARZ-phone.png";
import ARZbrk from "../assets/ARZ-brk.png";
import { useEffect } from "react";

document.getElementById('about').onmousemove = e => {
    for(const card of document.querySelectorAll('.arz-about-grid > div')){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    }
}

const About = () => {
    useEffect(() => {
        const handleMouseMove = e => {
            for(const card of document.querySelectorAll('.arz-about-grid > div')){
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            }
        };
    
        document.getElementById('about').addEventListener('mousemove', handleMouseMove);
    
        return () => {
            document.getElementById('about').removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="arz-about" id="about">
            <div className="arz-about-content">
                <h2 className="sticky">A propos.</h2>
                <div className="arz-about-grid">
                    <div className="arz-about-map inactive">
                        <div className="card-border"></div>
                        <div className="card-content">
                            <p>ARZ Web Concept est une agence de <b>développement web</b> basée à <b>Strasbourg</b><br />🥨</p>
                            <img className="ARZ-map" src={ARZmap} alt="map" />
                        </div>
                    </div>
                    <div className="arz-about-phone inactive">
                        <div className="card-border"></div>
                        <div className="card-content">
                            <p>ARZ Web Concept est  spécialisée dans la <b>création de sites web</b> et <b>d'applications web</b> sur mesure</p>
                            <img className="ARZ-phone" src={ARZphone} alt="phone" />
                        </div>
                    </div>
                    <div className="arz-about-brk inactive">
                        <div className="card-border"></div>
                        <div className="card-content">
                            <p>Nous mettons notre <b>expertise à votre service</b> pour vous aider à <b>concrétiser vos projets web.</b> Que vous soyez une entreprise, une association ou un particulier, <b>nous vous accompagnons</b> dans la <b>réalisation de votre projet web.</b></p>
                            <img className="ARZ-brk" src={ARZbrk} alt="brk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;