import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>QuickTee Clothing Co.</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge"></span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menus">


      </div>
    </nav>
  );
};

export default Navbar;