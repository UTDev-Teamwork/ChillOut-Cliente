import "./navBar-component.css";
// Components
import { ActionNavBar } from "./actionNavBar/actionNavBar-component";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Font Awsome Icons
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <div className='navBar'>
            <div><a href="" className="a-icon"><FontAwesomeIcon icon={faBars} /></a></div>
            <div className="fill"><ActionNavBar /></div>
            <div><a href="" className="a-icon"><FontAwesomeIcon icon={faCartShopping} /></a></div>
        </div>
    )
}