
import './Header.css'
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
      <nav>
             <span>My Website</span>
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/users">Users</NavLink>
                <NavLink to="/users">User</NavLink>
                <NavLink to ="/about">About</NavLink>
             <NavLink to="/contact">Contact Us</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;