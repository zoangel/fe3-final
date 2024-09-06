import React from 'react'
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

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
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar