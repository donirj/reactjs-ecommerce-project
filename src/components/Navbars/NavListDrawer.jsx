import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import React from 'react' 
import CartWidget from '../CartWidget/CartWidget';
import reactLogo from '../../assets/react.svg'
import './_NavListDrawer.scss' 
import AboutUs from '../../Pages/AboutUs/AboutUs';
import PokeApi from '../PokeList/PokeApi';
import PokeList from '../PokeList/PokeList';
import { Link } from 'react-router-dom';
import { CatchingPokemon } from '@mui/icons-material';
// import Buscador from '../../ejemplos/renderprops/Buscador';
import { useState, useContext } from 'react'
// import { DarkModeContext } from '../../context/DarkModeContext'
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

function NavListDrawer() {

  const { user, logout } = useContext(AuthContext)
  // const {darkMode, changeMode} = useContext(DarkModeContext)
  const {cart} = useContext(CartContext)

  return (
    <Box className='Box1' sx={{width: '100%'}}>

      <nav>
        <List className='List1'>
        <Link to='/' className='button1' component="a" href='/'>
            <CatchingPokemon />
            <ListItemText primary="Poke Store"/>
        </Link>
          {/* <h2>{darkMode ? 'dark' : 'light'}</h2> */}
          {/* <button onClick={changeMode} >Changes</button> */}
          <Link className='button1' component="a" to='/'>
            <ListItemText className='text1' primary="All Products"/>
          </Link>
          <Link className='button1' component="a" to='/PokeApi'>
            <ListItemText className='text1' primary="PokeApi"/>
          </Link>
          <Link className='button1' component="a" to='/nosotros'>
            <ListItemText className='text1' primary="Nosotros"/>
          </Link>
          {/* <Link className='button1' component="a" to='productos/small'>
            <ListItemText className='text1' primary="small"/>
          </Link>
          <Link className='button1' component="a" to='productos/medium'>
            <ListItemText className='text1' primary="medium"/>
          </Link>
          <Link className='button1' component="a" to='productos/big'>
            <ListItemText className='text1' primary="big"/>
          </Link> */}
          {cart.length > 0 && <CartWidget />}
        </List>
      </nav>
      <div className=''>
        <p>Bienvenido {user.email}</p>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      </div>
      {/* <Buscador /> */}
    </Box>
  )
}

export default NavListDrawer