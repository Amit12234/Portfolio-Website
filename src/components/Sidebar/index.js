import './index.scss';
// import LogoS from '../../asset/src/assets/images/logo-s.png';
import Name from '../../asset/src/assets/images/name.png'
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className ='logo' to =' /'>
             <img src = {Name} alt ='logo'></img>
            </Link>
            <nav>
                <NavLink exact = "true"  activeClassname="active" to ="/">
                    <FontAwesomeIcon icon ={faHome} color =" #4d4d4e"></FontAwesomeIcon>
                </NavLink>

                <NavLink exact = "true"  activeClassname="active" className="about-link" to ="/about">
                    <FontAwesomeIcon icon ={faUser} color =" #4d4d4e"></FontAwesomeIcon>
                </NavLink>

                <NavLink exact = "true"  activeClassname="active" className="contact-link"to ="/contact">
                    <FontAwesomeIcon icon ={faEnvelope} color =" #4d4d4e"></FontAwesomeIcon>
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a target = "blank" rel = "nonreferrer"
                    href='https://www.linkedin.com/in/amit-jha-79358b192/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>

                <li>
                    <a target = "blank" rel = "nonreferrer"
                    href='https://github.com/Amit12234'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>

            </ul>

        </div>

        
    )
}

export default Sidebar;