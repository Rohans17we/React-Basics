import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import "./Widgets.css";

//INSTALLING ICONS
//npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//npm install @fortawesome/fontawesome-free

const Widget = ({ title, value, change, isPositive }) => {
  return (
    <div className={`widget ${isPositive ? "positive" : "negative"}`}>
      <div className="widget-header">
        <span>{title}</span>
        <FontAwesomeIcon icon={faEllipsisH} className="icon" />
      </div>
      <div className="widget-content">
        <h2>{value}</h2>
        <span className="change">
          <FontAwesomeIcon icon={isPositive ? faArrowTrendUp : faArrowTrendDown} className={`arrow ${isPositive ? "up" : "down"}`} />
          {change}
        </span>
      </div>
    </div>
  );
};

const Widgets = () => {
  return (
    <div className="widgets-container">
      <Widget title="Revenue" value="$435,756" change="16%" isPositive={false} />
      <Widget title="Total Users" value="93,656" change="346" isPositive={true} />
    </div>
  );
};

export default Widgets;