import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth Year" field="birthYear" />
      <Record label="Eye Color" field="eyeColor" />
      <Record label="Height" field="height" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImgUrl: swapiService.getImgUrlPerson,
  };
};
export default withSwapiService(PersonDetails, mapMethodsToProps);
