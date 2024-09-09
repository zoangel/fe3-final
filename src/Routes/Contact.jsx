import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Requiere información adicional?</h2>
      <p>Envíe sus preguntas y nosotros nos pondremos en contacto.</p>
      <Form/>
    </div>
  )
}

export default Contact