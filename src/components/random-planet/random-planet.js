import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 1000000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet container">
        <div className="random-planet__planet">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { population, rotationPeriod, diameter, name, id } = planet;
  return (
    <React.Fragment>
      <div className="random-planet__planet--image">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
      </div>
      <div className="random-planet__planet--title">
        <h4>{name}</h4>
        <div className="list-group">
          <div className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </div>
          <div className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </div>
          <div className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
