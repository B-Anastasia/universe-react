import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 5,
    hasError: false,
  };

  onPersonSelected = (id) => {
    return this.setState({
      selectedPersonId: id,
    });
  };

  componentDidCatch(error, errorInfo) {
    // debugger;
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-12 col-md-6">
          <PersonDetails personId={this.state.selectedPersonId} />
        </div>
        {/*<ErrorButton/>*/}
      </div>
    );
  }
}
