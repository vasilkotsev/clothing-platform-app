import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, className, ...restProps }) => {
  return (
    <button
      className={["custom-button", className].filter(Boolean).join(" ")}
      {...restProps}
    >
      {children}
    </button>
    // <button
    //   className={className ? `${className} custom-button` : `custom-button`}
    //   {...restProps}
    // >
    //   {children}
    // </button>
  );
};

export default CustomButton;
