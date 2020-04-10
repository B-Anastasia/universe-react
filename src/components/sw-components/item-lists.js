//to create components for lists ( list of persons, star ships and planet )
import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose,
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ( {model} )
  </span>
);

const mapMethodsPersonToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
const mapMethodsStarshipToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};
const mapMethodsPlanetToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};

const PersonList = compose(
  withSwapiService(mapMethodsPersonToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapMethodsStarshipToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapMethodsPlanetToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export { PersonList, StarshipList, PlanetList };
