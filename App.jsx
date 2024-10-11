import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "./components/Header";
// import { ThemeProvider } from './contexts/';
import { useState } from "react";
import { ThemeContext } from "./contexts/theme";


var App = () => {

  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')) || false)
  
  return (
    

    <ThemeContext.Provider value={[isDark, setIsDark] }>
      
      <Header  />
       <Outlet />
      
      </ThemeContext.Provider>
    // <ThemeProvider>
     
    //   <Header  />
    //   <Outlet />
    // </ThemeProvider >
  );
};

export default App;
