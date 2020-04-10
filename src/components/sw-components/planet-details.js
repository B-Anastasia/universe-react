import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Name" field="name" />
      <Record label="Population" field="population" />
      <Record label="Rotation Period" field="rotationPeriod" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getImgUrlPlanet,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
