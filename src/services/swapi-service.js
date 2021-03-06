export default class SwapiService {
  _apiBase = "https://swapi.co/api";
  _imgBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, { mode: "no-cors" });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getImgUrlPerson = ({ id }) => {
    return `${this._imgBase}/characters/${id}.jpg`;
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getImgUrlPlanet = ({ id }) => {
    return `${this._imgBase}/planets/${id}.jpg`;
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getImgUrlStarship = ({ id }) => {
    return `${this._imgBase}/starships/${id}.jpg`;
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_perid,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      starshipClass: starship.starship_class,
      length: starship.length,
      manufacturer: starship.manufacturer,
      hyperdriveRating: starship.hyperdrive_rating,
      crew: starship.crew,
      passengers: starship.passengers,
    };
  };
}
