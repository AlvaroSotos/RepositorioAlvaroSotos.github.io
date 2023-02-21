import { Link } from "react-scroll";
import  ThemeSwitcher   from "./ThemeSwitcher";

const Header = () => {
  return (
    <header>
    <nav>
        <ul>
            <li>
            <Link to="home" smooth={true} duration={500}>
            Álvaro Sotos
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
            </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
            </li>
            <li>
            <ThemeSwitcher />
            </li>
    </ul>
    </nav> 
</header>
  );
};

export default Header;