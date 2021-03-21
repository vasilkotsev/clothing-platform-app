import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="nav">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
