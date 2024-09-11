import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState("Light")
  const [favs, setFavs] = useState(lsFavs);
  
  const [dentistas, setDentistas] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect( ()=> {

    axios(url).then( (response) => {
      console.log(response.data)
      setDentistas(response.data)      
    })
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);



  return (
    <ContextGlobal.Provider value={{dentistas,theme,setTheme,favs,setFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);