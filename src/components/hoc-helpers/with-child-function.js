import React from "react";

//function of higher order component

const withChildFunction = (func) => (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent {...props}>
        {/*sets as children function*/}
        {func}
      </WrappedComponent>
    );
  };
};

export default withChildFunction;
