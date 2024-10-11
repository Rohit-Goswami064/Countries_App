import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

 export function  useTheme(){
    // const [isDark,setIsDark] = useContext(ThemeContext);

    return useContext(ThemeContext);
}