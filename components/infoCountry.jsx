import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useOutletContext, useParams } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import  "./infoCountry.css";


export default function InfoCountry() {

  const { state } = useLocation();
  // const [isDark]=useOutletContext();
  const [isDark] = useTheme();


  const windowSize = useWindowSize()



  // const countryName = new URLSearchParams(location.search).get('name');
  //for dyanmic routing
  const param = useParams();
  const countryName = param.country;
  // console.log(param);

  const [notFound, setNotfound] = useState(false);


  const [country, setCountry] = useState(null);


  function updateUIdata(countryData) {

    // console.log(countryData)
    setCountry({
      name: countryData.name.common,
      flag: countryData.flags.png,
      nativeName: Object.values(countryData.name.nativeName || {})[0]?.common,
      population: countryData.population,
      region: countryData.region,
      subregion: countryData.subregion,
      capital: countryData.capital?.join(','),
      tld: countryData.tld.join(','),
      Currencies: countryData.currencies ? Object.values(countryData.currencies || {})?.map((currencies) => currencies.name ).join(',') : "N/A",
      languages: countryData.languages ? Object.values(countryData.languages || {})?.map((lang) => lang)?.join(',') : "N/A",
      border: []



    });
    {
      if (!countryData.borders) {
        countryData.borders = []
      }
      Promise.all(
        countryData?.borders?.map((bordeCode) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${bordeCode}`)
            .then((res) => res.json())
            .then(([data]) => {

              // Log each border country name
              return data.name?.common; // Return the name to Promise.all
            });
        })
      ).then((allBorderNames) => {
        setTimeout(() => {
          setCountry((prevState) => ({
            ...prevState,
            border: allBorderNames, // Update the border field with the fetched border names
          }));
        }, 1000);
        // Log the array of all border country names
      });
    }

  }



  async function getInfoCountry() {
    if (state) {
      updateUIdata(state);
      return;
    }

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
      const [countryData] = await response.json();
      updateUIdata(countryData);
      // Access the first item in the array
    } catch (error) {
      // console.error("Failed to fetch country data:", error);
      setNotfound(true);

    }
  }


  useEffect(() => {
    if (countryName)
      getInfoCountry()
  }, [countryName]);
  if (notFound) {
    return (
      <div className="notValie">
        <h1>
          Not found: {countryName}
        </h1>
        <h4 style={{ color: "red" }}>Please entry valid country name</h4>
      </div>
    )
  }

  return (

    country === null ? "loading....." :
      (

        <main className={` ${isDark ? 'dark' : ''}`} >
          {/* <h1 style={{ textAlign: "center" }}>
            Window width:{windowSize.width}<br></br>
            window height :{windowSize.height}
          </h1> */}
          <div className='country-details-container'>
            <span className="back-button" onClick={() => [
              history.back()
            ]}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={country.flag} alt="" />
              <div className="details-text-container">
                <h1>{country.name}</h1>
                <div className="details-text">
                  <p><b>Native Name: </b><span className="native-name">{country.nativeName ||country.name}</span></p>
                  <p><b>Population: </b><span className="population">{country.population?.toLocaleString('en-IN')}</span></p>
                  <p><b>Region: </b><span className="region">{country.region}</span></p>
                  <p><b>Sub Region: </b><span className="sub-region">{country?.subregion}</span></p>
                  <p><b>Capital: </b><span className="capital">{country?.capital}</span></p>
                  <p>
                    <b>Top Level Domain: </b><span className="top-level-domain">{country.tld}</span>
                  </p>
                  <p><b>Currencies: </b><span className="currencies">{country?.Currencies}</span></p>
                  <p><b>Languages: </b><span className="languages">{country?.languages}</span></p>
                </div>
                {country.Border?.length !== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
                  {
                    country.border?.map((border) => <Link key={border} to={`/${border}`} >{border}</Link>)

                  }

                </div>
                }
              </div>
            </div>
          </div>
        </main>

      )
  )
}