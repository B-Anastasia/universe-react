import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {
      showPlanet: true,
      showName: true,
    },
    hasError: false,
  };

  // getData = () => {
  //   return this.swapiService.getAllPeople();
  // };

  onTogglePlanet = () => {
    console.log(this.state.planet);
    const { showPlanet, showName } = this.state.planet;
    this.setState({
      planet: {
        showPlanet: !showPlanet,
        showName: !showName,
      },
    });
  };

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { showPlanet, showName } = this.state.planet;
    const viewPlanet = showPlanet ? <RandomPlanet /> : null;

    return (
      <div className="app">
        <Header />
        {viewPlanet}
        <div className="container">
          <ButtonToggle
            showName={showName}
            togglePlanet={this.onTogglePlanet}
          />
          <ErrorButton />
          <PeoplePage />
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => item.name}
              />
            </div>
            <div className="col-12 col-md-6">
              <PersonDetails personId={this.state.selectedPersonId} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => item.name}
              />
            </div>
            <div className="col-12 col-md-6">
              <PersonDetails personId={this.state.selectedPersonId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ButtonToggle = ({ showName, togglePlanet }) => {
  const name = showName ? "Hide Planet" : "Show Planet";
  return (
    <div className="btn btn-light mb-4" onClick={togglePlanet}>
      {name}
    </div>
  );
};
