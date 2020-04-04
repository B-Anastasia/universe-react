import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";

export default class App extends Component{

    state={
        selectedPersonId: 5,
        planet:{
            showPlanet: true,
            showName: true
        },
        hasError: false
    };



    onTogglePlanet =()=>{
        console.log(this.state.planet);
        const {showPlanet, showName} =this.state.planet;
        this.setState({
            planet: {
                showPlanet: !showPlanet,
                showName: !showName
            }
        });
       };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        this.setState({
            hasError: true
        });
    }


    render(){
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const {showPlanet, showName} = this.state.planet;
        const viewPlanet = showPlanet? <RandomPlanet /> : null;

        return (
            <div className='app'>
                <Header/>
                {viewPlanet}
                <div className='container'>
                    <ButtonToggle showName={showName} togglePlanet={this.onTogglePlanet} />
                    <ErrorButton/>
                    <PeoplePage />
                   <PeoplePage />
                   <PeoplePage />
                </div>
            </div>
        );
    }
};

const ButtonToggle = ({showName, togglePlanet}) =>{
    const name = showName? 'Hide Planet':'Show Planet';
    return (
            <div className='btn btn-light mb-4' onClick={togglePlanet}>
            {name}
        </div>
    );
};