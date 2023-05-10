import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

function PokeApi() {

  const [id, setId] = useState(1)
  const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])


  const handleAnte = () => {
    setId(id - 1)
  }

  const handleSig = () => {
    setId(id + 1)
  }

  return (
    <div className='container my-5' >

        {
            loading ? <h2>Cargando</h2>
            :
            <div>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        }

            <button onClick={handleAnte}>Anterior</button>
            <button onClick={handleSig}>Siguiente</button>

    </div>
  )
}

export default PokeApi