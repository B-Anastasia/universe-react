import React from 'react';
import './person-details.css';

const PersonDetails = () =>{
    return(
        <div className="person-details card">
            <div className='person-details--main d-flex'>
            <div className='person-details__image'>
                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="Image"/>
            </div>
            <div className='person-details__body card-body'>
                    <h4>Name1</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>red</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height</span>
                            <span>172</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;
