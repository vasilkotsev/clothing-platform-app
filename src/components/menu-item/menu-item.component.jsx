import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = (props) => {
  const { title, size, imageUrl, linkUrl } = props.section;

  return (
    <div
      className={size ? `${size} menu-item` : `menu-item`}
      onClick={() => props.history.push(`${props.match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className={"content"}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
