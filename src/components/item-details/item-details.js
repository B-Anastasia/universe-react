import React, { Component } from "react";
import "./item-details.css";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true,
      });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImgUrl(item),
        loading: false,
      });
    });
  };

  render() {
    if (!this.state.item) {
      return (
        <span style={{ fontSize: "1.2rem" }}>Select an item from the list</span>
      );
    }
    const { loading, item, image } = this.state;
    const onLoaded = loading || !this.state.item;
    if (onLoaded) {
      return <Spinner />;
    }
    const { name } = item;

    return (
      <div className="item-details card">
        <div className="item-details--main">
          <div className="item-details__image">
            <img src={image} alt="item" />
          </div>
          <div className="item-details__body card-body">
            <h4>{name}</h4>
            <ul className="list-group">
              {React.Children.map(this.props.children, (child) => {
                return child;
              })}
            </ul>
          </div>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
