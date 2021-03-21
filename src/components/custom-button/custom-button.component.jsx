import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignInButton, ...restProps }) => {
  return (
    <button
      className={`${
        isGoogleSignInButton ? "google-sign-in-button" : ""
      } custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
