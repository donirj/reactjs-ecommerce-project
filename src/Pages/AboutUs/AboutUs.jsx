import { useContext, useEffect } from 'react'
import React from 'react'
import { withProductsData } from '../../ejemplos/hoc/withProducts'

function AboutUs({productos, loading}) {


    // referencia
    const clickear = (event) => {
      event.stopPropagation()
      console.log(event)
    }

  useEffect(() => {

    window.addEventListener('click', clickear)

    return () => {
      window.removeEventListener('click', clickear)
    }

  }, [])

  return (
    <div className='container my-5' onClick={clickear}>
      <h2>Nosotros</h2>
      <hr />
    </div>
  )
}

export default AboutUs