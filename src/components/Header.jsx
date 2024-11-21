import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
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
                    <li className="header-contact">
                        <a href="#contact">Contact.</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;