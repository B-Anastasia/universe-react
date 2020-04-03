import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component{

    state={
        selectedPersonId: 5,
        planet:{
            showPlanet: true,
            showName: true
        }
    };

    onPersonSelected = (id) =>{
        return (
            this.setState({
                selectedPersonId: id
            })
        )
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


    render(){
        const {showPlanet} = this.state.planet;
        const viewPlanet = showPlanet? <RandomPlanet /> : null;

        return (
            <div className='app'>
                <Header/>
                {viewPlanet}
                <Button planet={this.state.planet} togglePlanet={this.onTogglePlanet} />
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 mb-3'>
                            <ItemList onItemSelected={this.onPersonSelected}/>
                        </div>
                        <div className='col-12 col-md-6'>
                            <PersonDetails personId={this.state.selectedPersonId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const Button = ({showName, togglePlanet}) =>{
    const name = showName? 'Hide Planet':'Show Planet';
    return (
        <div className='container'>
            <div className='btn btn-light mb-4' onClick={togglePlanet}>
            {name}
        </div>
        </div>
    );
};