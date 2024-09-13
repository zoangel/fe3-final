import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = (props) => {

  
  const dentista = props.dentista
  console.log(dentista)

  const { state, dispatch } = useContextGlobal();

  console.log(state.favs)

  const isFav = state.favs.find((fav) =>  fav.id == dentista.id);
  console.log(isFav);

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAVS" : "SET_FAVS", payload: dentista });
  };
  
  return (
    <div className="card">
        <h3>Nombre: {dentista.name}</h3>
        <img src="/images/dentista.jpg" width="200px"></img>
        <h4>Usuario: {dentista.username}</h4>
        <h4>Id: {dentista.id}</h4>

        <Link to={"/detalles/"+dentista.id}>
          <button>Ver detalles</button>
        </Link>

        <button onClick={addFav} className="favButton">{isFav ? "❤️" : "🖤"}</button>
    </div>
  );
};

export default Card;
