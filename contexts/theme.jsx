import { createContext } from "react";

// give me error 
// Export ThemeProvider as a named export
// export function ThemeProvider({ children }) {
//     console.log(children)
  

//   return (
//     <ThemeContext.Provider value={{ isDark, setIsDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// Create ThemeContext
export const ThemeContext = createContext();