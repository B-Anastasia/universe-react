import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import DummySwapiService from "../../services/dummy-swapi-service";
import {  SwapiServiceProvider} from '../swapi-service-context';
import Row from "../row";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PlanetDetails,
  PersonDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends Component {
  swapiService = new DummySwapiService();

  state = {
    planet: {
      showPlanet: true,
      showName: true,
    },
  };

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

  render() {
    const { showPlanet, showName } = this.state.planet;
    const viewPlanet = showPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
        <div className="app">
          <Header />
          {viewPlanet}
          <div className="container">
            <ButtonToggle
              showName={showName}
              togglePlanet={this.onTogglePlanet}
            />
            {/*<Row  right={person} left={itemList}/>*/}
            <ErrorButton />
            {/*<PeoplePage />*/}

            <PersonList />

            <PlanetList />

            <StarshipList />

            <PersonDetails itemId={1} />
            <PlanetDetails itemId={1} />
            <StarshipDetails itemId={1} />
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
