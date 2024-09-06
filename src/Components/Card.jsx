import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h4>{id}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/detalles/"+id}>
          <button>Ver detalles</button>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
