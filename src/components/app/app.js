import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
// import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
// import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";

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
        getAllPeople,
      getStarship,
      getImgUrlPerson,
      getImgUrlStarship,
      getAllPlanets,
    } = this.swapiService;
    const { showPlanet, showName } = this.state.planet;
    const viewPlanet = showPlanet ? <RandomPlanet /> : null;

    const person = (
      <ItemDetails itemId={11} getData={getPerson} getImgUrl={getImgUrlPerson}>
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
        <Record label="Height" field="height" />
      </ItemDetails>
    );
    const starship = (
      <ItemDetails
        itemId={11}
        getData={getStarship}
        getImgUrl={getImgUrlStarship}
      >
        <Record field='model' label='Model' />
        <Record field='starshipClass' label='Starship Class' />
        <Record field='length' label='Length' />
        <Record field='manufacturer' label='Manufacturer' />
        <Record field='hyperdriveRating' label='Hyper Drive Rating' />
        <Record field='crew' label='Crew' />
        <Record field='passengers' label='Passengers' />
      </ItemDetails>
    );

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
            <ItemList getData = {getAllPeople} onItemSelected={()=>{}}>
              {({name}) => <span>{name}</span>}
            </ItemList>
            <br/>
            <ItemList getData = {getAllPlanets} onItemSelected={()=>{}}>
              {({name}) => <span>{name}</span>}
            </ItemList>
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
