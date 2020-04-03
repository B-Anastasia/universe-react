import React, {Component} from 'react';
import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
            console.log('set');
            this.setState({
                loading:true
            });
            console.log("update");
            this.updatePerson();
        }
    }

    updatePerson = () =>{
        const {personId} = this.props;
        if(!personId){
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person)=>{
                this.setState({
                    person,
                    loading: false
            });
    });
    };


    render() {
        const {loading} = this.state;
        const onLoaded = (loading || !this.state.person );
        const spinner = onLoaded? <Spinner/> : <ItemDetail person={this.state.person} /> ;


        return(
            <div className="person-details card">
                {spinner}
            </div>
        );
    }
};

const ItemDetail = ({person}) =>{

    const { id, name, gender, birthYear, eyeColor, height} = person;

    return(
        <div className='person-details--main d-flex'>
            <div className='person-details__image'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person"/>
            </div>
            <div className='person-details__body card-body'>
                <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height</span>
                        <span>{height}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};