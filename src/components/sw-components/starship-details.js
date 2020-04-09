import React from "react";
import { withSwapiService } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details/item-details";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImgUrl: swapiService.getImgUrlStarship,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
