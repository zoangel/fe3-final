import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  console.log(detail);

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);


  return (
    <>
    <main className="main" >
      <div>
        <h1>Dentista {detail.name} </h1>
        <h3>Id: {detail.id}</h3>
        <h3>Email: {detail.email}</h3>
        <h3>Telefono: {detail.phone}</h3>
        <h3>Sitio web: {detail.website}</h3>
      </div>
      </main>
    </>
  )
}

export default Detail