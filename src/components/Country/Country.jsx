import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handelVisitedCountries, handelVisitedFlags}) => {
  const [visited, setVisited] = useState(false)
  // console.log(handelVisitedCountries);
  
  // console.log(country.area.area);

  const handelVisited = () =>{
    // basic system
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
   
    // second system
    // setVisited(visited ? false : true);
  
    // third system
    setVisited(!visited)

    handelVisitedCountries(country)
  }
  
  return (
    // <div className={`country ${visited ? 'country-visited': 'country-not-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.png} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital} </p>
      <p>Region: {country.region.region} </p>
      <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
      <button onClick={handelVisited}>
        {
          visited ? 'Visited' : 'Not Visited'
        }
      </button>
      <button onClick={() => {handelVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
    </div>
  );
};

export default Country;


/**
 * 1. inline css (style object)
 */