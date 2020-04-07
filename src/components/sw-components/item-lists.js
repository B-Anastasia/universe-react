//to create components for lists ( list of persons, star ships and planet )
import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

//function of higher order component
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (WrappedComponent, func) => {
    return (props) =>{
       return (
           <WrappedComponent {...props}>
               {/*sets as children function*/}
               {func}
           </WrappedComponent>
       )
   }
};

const renderName = ({name})=><span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ( {model} )</span>;


const PersonList = withData(
    withChildFunction (ItemList, renderName ), getAllPeople);

const StarshipList = withData(
    withChildFunction (ItemList, renderNameAndModel ), getAllStarships);

const PlanetList = withData(
    withChildFunction (ItemList, renderName ), getAllPlanets);

export { PersonList, StarshipList, PlanetList };
