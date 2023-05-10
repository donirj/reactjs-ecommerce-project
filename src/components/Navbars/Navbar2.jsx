import React from 'react'
import PokeApi from '../PokeList/PokeApi'
import PokeList from '../PokeList/PokeList'

function Navbar2() {
  return (
    <header style={{background: 'blue'}}>
        <div>
            <nav>
                <a href='/PokeApi' >Inicio 1</a>
                <a href='/PokeList'>Nosotros 2</a>
                <a href='/PokeList'>Nosotros 3</a>
            </nav>
        </div>
    </header>
  )
}

export default Navbar2