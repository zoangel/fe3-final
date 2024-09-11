import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 const {dentistas} = useContextGlobal();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        { dentistas.map( (dentista)=> (
          <Card key={dentista.index} dentista = {dentista} />
        ))}
      </div>
    </main>
  )
}

export default Home