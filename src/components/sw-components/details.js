//to create components for details of persons, star ships and planet

import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/item-details";

const swapiService = new SwapiService();
const {
  getPerson,
  getStarship,
  getPlanet,
  getImgUrlPlanet,
  getImgUrlPerson,
  getImgUrlStarship,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImgUrl={getImgUrlPerson}
    >
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
      <Record label="Height" field="height" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImgUrl={getImgUrlPlanet}
    >
      <Record label="Name" field="name" />
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImgUrl={getImgUrlStarship}
    >
      <Record field="model" label="Model" />
      <Record field="starshipClass" label="Starship Class" />
      <Record field="length" label="Length" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="hyperdriveRating" label="Hyper Drive Rating" />
      <Record field="crew" label="Crew" />
      <Record field="passengers" label="Passengers" />
    </ItemDetails>
  );
};

export { PersonDetails, StarshipDetails, PlanetDetails };
