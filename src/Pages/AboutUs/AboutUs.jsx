import { useEffect } from 'react'
import React from 'react'

function AboutUs() {

  useEffect(() => {

    const clickear = () => {
      console.log('click')
    }

    window.addEventListener('click', clickear)
  
    return () => {
      window.removeEventListener('click', clickear)
    }

  }, [])

  return (
    <div>Nosotros</div>
  )
}

export default AboutUs