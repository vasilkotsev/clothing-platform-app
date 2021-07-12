import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </nav>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

/* When is passed as first argument to connect(), supplies the State object from Redux Store and gets the currentUser value from it.
currentUser and hidden are merged into the component props object. createStructuredSelector automatic passes Store state value
to each selector */

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
