//to create components for details of persons, star ships and planet

import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
  return (
      <SwapiServiceConsumer>
        {
          ({getPerson, getImgUrlPerson }) =>{
            return(
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
          }
        }

      </SwapiServiceConsumer>

  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getImgUrlPlanet }) =>{
          return(
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
          )
        }
      }
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getImgUrlStarship })=>{
          return(
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
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, StarshipDetails, PlanetDetails };
