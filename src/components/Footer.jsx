import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="arz-footer">
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
            <button className="banner-contact">Contact.</button>
            <p className="cc">© 2021 ARZ Web Concept. All rights reserved.</p>
        </div>
    )
}

export default Footer;