import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav className="navContainer">
      <div className="menu-and-logo">
        <p className="logo">
          Bookstore CMS
        </p>
        <ul className="menuItems">
          <li><NavLink className="panel-bg" to="/">BOOKS</NavLink></li>
          <li><NavLink className="panel-bg" to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
      <p>Account</p>
    </nav>
  );
}

export default Navbar;
