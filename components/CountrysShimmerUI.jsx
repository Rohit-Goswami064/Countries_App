import React from 'react'


import './CountrysShimmerUI.css' ;
export default function CountrysShimmerUI() {


  return (
    <div className='countries-container'>
     
     {Array.from({length:16}).map((el,i)=>{
        return    <div key={i} className="country-card shimmer-card"></div>
    })}
    

    </div>
  )
}
