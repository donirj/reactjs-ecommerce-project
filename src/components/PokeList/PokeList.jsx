import { useState, useEffect } from 'react'
import Pokemon from './Pokemon'

function PokeList() {

  const [list, setList] = useState(null)
  // state con url para el llamado
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
  // state para el pagination
  const [pagination, setPagination] = useState({
    // propiedades para organizar la paginacion
    next: null,
    previous: null
  })

  console.log(pagination)


    useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {

            setList(data.results)
            // state para pagination
            // actualiza en pagination los datos siguientes y previos
            setPagination({
              next: data.next,
              previous: data.previous
            })
        })
        .catch(err => console.log(err))
  },[])

  const handleAnte = () => {
    pagination.previous && setUrl(pagination.previous)
  }

  const handleSig = () => {
    pagination.next && setUrl(pagination.next)
  }

  return (
    <div className='container my-5' >

            <p>PokeList</p>


        <button onClick={handleAnte}>Anterior</button>
        <button onClick={handleSig}>Siguiente</button>

        <div className='row'>
            {list &&
                list.map(poke => <Pokemon url={poke.url} key={poke.name} />)
            }
        </div>

    </div>
  )
}

export default PokeList