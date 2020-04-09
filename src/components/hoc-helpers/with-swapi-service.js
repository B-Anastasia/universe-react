import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (WrappedComponent, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <WrappedComponent {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
