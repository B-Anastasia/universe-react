import React from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () =>{
    return (
        <div className='app'>
            <Header/>
            <RandomPlanet/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 mb-3'>
                        <ItemList/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default  App;

