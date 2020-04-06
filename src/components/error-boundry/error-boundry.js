import React, { Component } from "react";
import "./error-boundry.css";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    return this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
