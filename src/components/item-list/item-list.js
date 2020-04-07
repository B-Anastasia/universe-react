import React from "react";
import "./item-list.css";
import ErrorBoundry from "../error-boundry";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
            {label}
        </li>
    );
  });

  return (
    <ErrorBoundry>
      <ul className="item-list list-group">{items}</ul>
    </ErrorBoundry>
  );
};

export default ItemList;
