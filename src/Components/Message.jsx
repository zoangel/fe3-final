import React from "react";

const Message = ({ contacto }) => {
    return (
      <div>
        <h2>¡Hola {contacto.name}!</h2>
        <h3>Nos pondremos en contacto vía tu correo: {contacto.email}</h3>
      </div>
    )
  
}

export default Message;