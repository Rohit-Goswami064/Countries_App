// import {  useOutletContext } from "react-router-dom";
import CountryContainer from "./CountryContainer";
import SerachBar from "./SerachBar";
import { useContext, useEffect, useState } from "react"
import React from 'react'
import { ThemeContext } from "../contexts/theme";
import { useWindowSize } from "../hooks/useWindowSize";
import SelectManu from "./SelectManu";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext(); not need due context api
  const [isDark] = useTheme();
  // const windowSize   =useWindowSize()
  // console.log(isDark);

  return (
  
    <main className={isDark ? 'dark' : ''}>
     <div className="search-filter-container">
     <div className="search-container">
      <SerachBar setQuery={setQuery} />
      </div>
      
      
      
      
      <SelectManu  setQuery={setQuery}/>
 

     
      </div>
      <CountryContainer query={query} />
    </main>

  

  )
}
