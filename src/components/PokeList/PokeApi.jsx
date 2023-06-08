import React from 'react'
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './_PokeApi.scss'

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
    <div className='container1' >

        <div className='container2'>

          {
              loading ? <h2>Cargando...</h2>
              :
              <div>
                  <h3>Ve a tus pokemon favoritos</h3>
                  <img className='pokeImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>Nombre: {pokemon.name}</p>
                  <p>id: {pokemon.id}</p>
                  <p>Altura: {pokemon.height}</p>
                  <p>Peso: {pokemon.weight}</p>
              </div>
          }

              <button className='btn btn-danger' onClick={handleAnte}>Anterior</button>
              <button className='btn btn-success' onClick={handleSig}>Siguiente</button>

        </div>

    </div>
  )
}

export default PokeApi