import React from "react";

import "./InfoBox.css";

function InfoBox({ type, title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <div
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${type}`}
    >
      <div>
        <h1 color="textSecondary" className="infoBox__heading">
          {title}
        </h1>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <h3 className="infoBox__total" color="textSecondary">
          {total} Total
        </h3>
      </div>
    </div>
  );
}

export default InfoBox;
