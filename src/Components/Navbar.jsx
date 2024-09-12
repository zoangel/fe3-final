import React, { useEffect } from 'react'
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import { type } from '@testing-library/user-event/dist/type'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,dispatch} = useContextGlobal();

  const handleSwitch = () => {
    // setTheme ( (state)=> (state === "Light" ? "Dark" : "Light"))
    dispatch( {type: "SET_THEME", payload: state.theme === "Light" ? "Dark" : "Light"})
    console.log(state.theme)
    let color = state.theme
    console.log(color)
    const body = document.querySelector("body");
    body.setAttribute('id',color)
  }

  

 

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.inicio}>
        <h4>Inicio</h4>
      </Link>
      <Link to={routes.contacto}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.destacados}>
        <h4>Destacados</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleSwitch}>{state.theme}</button>
    </nav>
  )
}

export default Navbar