import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";

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
    const {
      getPerson,
      getStarship,
      getImgUrlPerson,
      getImgUrlStarship,
    } = this.swapiService;
    // const { showPlanet, showName } = this.state.planet;
    // const viewPlanet = showPlanet ? <RandomPlanet /> : null;

    const person = (
      <ItemDetails itemId={11} getData={getPerson} getImgUrl={getImgUrlPerson}>
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="gender" />
        <Record label="Eye Color" field="gender" />
        <Record label="Height" field="gender" />
      </ItemDetails>
    );
    const starship = (
      <ItemDetails
        itemId={11}
        getData={getStarship}
        getImgUrl={getImgUrlStarship}
      />
    );

    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          {/*{viewPlanet}*/}
          <div className="container">
            <Row left={person} right={starship} />
            {/*<ButtonToggle*/}
            {/*  showName={showName}*/}
            {/*  togglePlanet={this.onTogglePlanet}*/}
            {/*/>*/}
            {/*<ErrorButton />*/}
            {/*<PeoplePage />*/}
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
