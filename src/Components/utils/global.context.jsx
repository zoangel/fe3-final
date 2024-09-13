import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer";

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  dentistas: [],
  favs: lsFavs,
  theme: "Light",
};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // const [theme, setTheme] = useState("Light")
  // const [favs, setFavs] = useState(lsFavs);
  // const [dentistas, setDentistas] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect( ()=> {

    axios(url).then( (response) => {
      console.log(response.data)
      dispatch({ type: "SET_DENTISTA", payload: response.data });      
    })
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
    console.log(state.favs)
  }, [state.favs]);



  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);