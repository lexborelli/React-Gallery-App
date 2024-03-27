import { NavLink } from "react-router-dom";

const Nav = () => {
    return (

     <nav className="main-nav">
        <ul>
            
            <li><NavLink to="/tropical">Tropical</NavLink></li>
            <li><NavLink to="/waterfalls">Waterfalls</NavLink></li>
            <li><NavLink to="/beaches">Beaches</NavLink></li>
        </ul> 
     </nav>
    );
};

export default Nav;
