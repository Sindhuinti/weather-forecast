import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
  <div className="d-flex justify-content-between">
    <p className="mb-1 font-weight-bolder text-uppercase">{name}</p>
    <p className="mb-1">
      {value} {unit}
    </p>
  </div>
);

export default CurrentDayDescriptionItem;
