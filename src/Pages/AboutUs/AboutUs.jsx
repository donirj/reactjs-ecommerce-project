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
      <p>What is Lorem Ipsum? </p>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}

export default AboutUs