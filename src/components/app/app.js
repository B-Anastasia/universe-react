import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
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
  swapiService = new SwapiService();

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
            {/*<PersonList>{({ name }) => <span>{name}</span>}</PersonList>*/}
            {/*<br />*/}
            {/*<PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>*/}
            {/*<br />*/}
            {/*<StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>*/}
            <PersonDetails itemId={11} />
          </div>
        </div>
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
