import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <p>BOOKSTORE CMS</p>
        <ul>
          <li><NavLink to="/">BOOKS</NavLink></li>
          <li><NavLink to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
      <p>Account</p>
    </nav>
  );
}

export default Navbar;
