
import CountryCard from './CountryCard';
// import CountryData from '../CountryData';
import { useEffect, useState } from 'react';
import CountrysShimmerUI from './CountrysShimmerUI';

export default function CountryContainer({ query }) {
//  console.log(query);
  const [CountryData, setCountryData] = useState([]);
  // const [count,setCount]=useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {

        setCountryData(data)
      })
  }, [])


  // useEffect(()=>{
  //   console.log("yo")
  // },[count,CountryData])

  return (
    <>  {!(CountryData?.length) ?

      <CountrysShimmerUI />
      :
      <div className='countries-container' >
        {
          (CountryData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query) )).map((country)  => {

            return (

 
              <CountryCard
              
                key={country.name.common}
                name={country.name.common}
                flagImg={country.flags.png}
                population={country.population.toLocaleString('en-IN')} region={country.region}
                capital={country.capital}
                data={country} />
            )
          })
        }
      </div>}
    </>
  )
}
