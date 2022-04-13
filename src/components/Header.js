import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ quantity }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">
              <FontAwesomeIcon icon={faCartShopping} className="fa-xl" />
            </Link>
            <div className={`badge ${quantity > 0 ? "active" : "disabled"}`}>
              {quantity}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
