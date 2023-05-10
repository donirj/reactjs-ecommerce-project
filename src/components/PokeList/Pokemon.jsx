import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

const Pokemon = ({url}) => {
  
    const {data: pokemon} = useFetch(url)

  return (
    <div className='col-3 m-2' >

    {
        pokemon &&
        <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    }

    </div>
  )
}

export default Pokemon