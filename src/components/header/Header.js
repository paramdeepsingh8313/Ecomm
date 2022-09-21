import React from "react";
import "./Header.css";
import cart from "../../assets/icons/cart.svg";
import { useStateValue } from "../../redux/StateProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  const [{ add_to_cart }, dispatch] = useStateValue();

  return (
    <>
      <div className="headerLeft">
        <Link to="/">
          <h4>Shopify</h4>
        </Link>
      </div>
      <div className="headerRight">
        <Link to="/">
          <h4 style={{ textDecoration: "none" }}>Products</h4>
        </Link>

        <div className="cardDiv">
          <Link to="/cart">
            <img
              src={cart}
              alt="Cart Logo"
              // style={{ width: "1.6rem", height: "1.6rem" }}
              className="cartImg"
            />
          </Link>
          {add_to_cart?.length > 0 && <p>{add_to_cart?.length} </p>}
        </div>
      </div>
    </>
  );
}

export default Header;
