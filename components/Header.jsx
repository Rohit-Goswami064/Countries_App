import { useState,useContext } from "react"
import { ThemeContext } from "../contexts/theme";

export default function Header() {

  const [isDark,setIsDark] = useContext(ThemeContext)


  // console.log(localStorage.getItem('isDarkMode'));//its return true in string form


  // if(isDark){
  //   document.body.classList.add('dark');
  // }
  // else{
  //   document.body.classList.remove('dark');
  // }
  return (
    <header className={`header-container ${isDark? 'dark':''}`}>
      <div className="header-content">
        <h2 className="title" ><a href="/">Where in world?</a></h2>

        <p className="theme-changer"


          onClick={() => {
    
            setIsDark(!isDark)
            localStorage.setItem("isDarkMode",!isDark)
          }

          }><i className={`fa-solid fa-${isDark? 'sun':'moon'}`}>
            </i>{` ${isDark? 'Light':'Dark'} mode`}</p>
      </div>
    </header>
  )
}
