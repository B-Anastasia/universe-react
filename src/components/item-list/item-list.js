import React, { Component } from "react";
import "./item-list.css";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const child = this.props.children;
      const label = child(item);
      // const label = ({ children }) => children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => {
            this.props.onItemSelected(id);
          }}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    const hasData = itemList ? this.renderItems(itemList) : <Spinner />;
    return (
      <ErrorBoundry>
        <ul className="item-list list-group">{hasData}</ul>
      </ErrorBoundry>
    );
  }
}
