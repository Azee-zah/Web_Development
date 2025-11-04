import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <h2>NG Explore Nigeria</h2>
            <ul>
                <li>
                    <NavLink to='/' end>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/states'>States</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar