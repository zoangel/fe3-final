import React, { useState } from "react";
import Message from "./Message";
import MessageError from "./MessageError";

const Form = () => {

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [flag, setFlag] = useState(false);
  const [flagError, setFlagError] = useState(false);

  const [contacto, setContacto] = useState({
    name: "",
    email: ""
  });

  const handleName = (e) => {
    setContacto({ ...contacto, name: e.target.value });
  }

  const handleMail = (e) => {
    setContacto({ ...contacto, email: e.target.value });
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validaEmail || validaNombre){
      setFlag(true);
      setFlagError(false);
      console.log(contacto);
      return;
    }
    setFlagError(true);
    setFlag(false);
  };

  const validaNombre = () => {
    return (contacto.name.trim().length < 5) ? false : true;
  };

  const validaEmail = () => {
    return (contacto.email.trim().match(emailRegex)) ? true : false;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input 
          type="text" 
          value={contacto.name}
          onChange={handleName}/>
        <label >Email</label>
        <input 
          type="email"
          value={contacto.email}
          onChange={handleMail}/>
        <button type="submit">Registrarse</button>
      </form>

      {flag ? <Message contacto={contacto} /> : null}
      {flagError ? <MessageError  /> : null}
    </div>
  );
};

export default Form;
