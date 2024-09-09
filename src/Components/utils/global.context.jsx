import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dentistas, setDentistas] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect( ()=> {

    axios(url).then( (response) => {
      console.log(response.data)
      setDentistas(response.data)
      
    })
  }, []);



  return (
    <ContextGlobal.Provider value={{setDentistas,dentistas}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);