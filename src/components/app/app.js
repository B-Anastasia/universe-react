import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {
  state = {
    planet: {
      showPlanet: true,
      showName: true,
    },
    swapiService: new SwapiService(),
  };

  onTogglePlanet = () => {
    this.setState(({ planet }) => {
      const { showPlanet, showName } = planet;
      return {
        planet: {
          showPlanet: !showPlanet,
          showName: !showName,
        },
      };
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    const { showPlanet, showName } = this.state.planet;
    const viewPlanet = showPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app">
            <Header onServiceChange={this.onServiceChange} />
            {viewPlanet}
            <div className="container">
              <ButtonToggle
                showName={showName}
                togglePlanet={this.onTogglePlanet}
              />
              <ErrorButton />

              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />
            </div>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
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
