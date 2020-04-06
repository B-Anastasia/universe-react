import React from "react";
import "./row.css";

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 mb-3">{left}</div>
      <div className="col-12 col-md-6">{right}</div>
    </div>
  );
};

export default Row;
