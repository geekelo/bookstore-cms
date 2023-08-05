import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <span className="Bookstore-CMS Text-Style-3">
          Bookstore CMS
        </span>
        <ul>
          <li><NavLink className="panel-bg" to="/">BOOKS</NavLink></li>
          <li><NavLink className="panel-bg" to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
      <p>Account</p>
    </nav>
  );
}

export default Navbar;
