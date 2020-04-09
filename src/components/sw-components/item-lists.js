//to create components for lists ( list of persons, star ships and planet )
import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

//function of higher order component

const withChildFunction = (WrappedComponent, func) => {
  return (props) => {
    return (
      <WrappedComponent {...props}>
        {/*sets as children function*/}
        {func}
      </WrappedComponent>
    );
  };
};

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

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapMethodsPersonToProps
);
const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameAndModel)),
  mapMethodsStarshipToProps
);
const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapMethodsPlanetToProps
);

export { PersonList, StarshipList, PlanetList };
