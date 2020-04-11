import React from "react";
import "./row.css";
import PropTypes from "prop-types";

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 mb-3">{left}</div>
      <div className="col-12 col-md-6">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Row;
