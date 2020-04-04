import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component{

    state={
        selectedPersonId: 5,
        hasError: false
    };

    onPersonSelected = (id) =>{
        return (
            this.setState({
                selectedPersonId: id
            })
        )
    };

    componentDidCatch(error, errorInfo) {
        debugger;
        this.setState({
            hasError: true
        });
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className='row people-page'>
                <div className='col-12 col-md-6 mb-3'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className='col-12 col-md-6'>
                    <PersonDetails personId={this.state.selectedPersonId} />
                </div>
                <ErrorButton/>
            </div>
        );
    }
}