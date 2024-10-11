import React from 'react';
import { Link } from 'react-router-dom';


export default function CountryCard({name,flagImg,population,region,capital,data}) {

 
  return (
    
     <Link className="country-card" to={`/${name}`} state={data}>
          <img className='country-card img' src={flagImg} alt={name+`flag`} />
          <div className="details-text-container">
            <h1 className='card-title'>{name}</h1>
            <div className="card-text">
              {/* <p><b>Native Name: </b><span className="native-name">{nativeName}</span></p> */}
              <p><b>Population: </b><span className="population">{population}</span></p>
              <p><b>Region: </b><span className="region">{region}</span></p>
              {/* <p><b>Sub Region: </b><span className="sub-region"></span></p> */}
              <p><b>Capital: </b><span className="capital">{capital}</span></p>
              {/* <p>
                <b>Top Level Domain: </b><span className="top-level-domain"></span>
              </p>
              <p><b>Currencies: </b><span className="currencies"></span></p>
              <p><b>Languages: </b><span className="languages"></span></p> */}
            </div>
            {/* <div className="border-countries"><b>Border Countries: </b>&nbsp;</div> */}
          </div>
          </Link>
          
  )
}
