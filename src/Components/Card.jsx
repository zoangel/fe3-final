import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = (props) => {

  const dentista = props.dentista
  const { favs,setFavs } = useContextGlobal();
  const addFav = () => {
    setFavs((favs) => [...favs, dentista]);
    console.log(favs)
  };
  
  
  console.log(dentista)
  return (
    <div className="card">

        <h3>Nombre:{dentista.name}</h3>
        <h4>Usuario:{dentista.username}</h4>
        <h4>Id:{dentista.id}</h4>

        <Link to={"/detalles/"+dentista.id}>
          <button>Ver detalles</button>
        </Link>

        <button onClick={addFav} className="favButton">❤️</button>
    </div>
  );
};

export default Card;
