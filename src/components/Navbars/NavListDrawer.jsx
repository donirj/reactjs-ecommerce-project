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

function NavListDrawer() {
  return (
    <Box className='Box1' sx={{width: '100%'}}>
      <nav>
        <List className='List1'>
        <Link className='button1' component="a" href='/'>
            <Link to='/'>
            <CatchingPokemon />
            </Link>
            <ListItemText primary="Poke Store"/>
        </Link>
          <CartWidget />
          <Link className='button1' component="a" to='/'>
            <ListItemText className='text1' primary="All Products"/>
          </Link>
          <Link className='button1' component="a" to='/PokeApi'>
            <ListItemText className='text1' primary="PokeApi"/>
          </Link>
          <Link className='button1' component="a" to='/nosotros'>
            <ListItemText className='text1' primary="About us"/>
          </Link>
          <Link className='button1' component="a" to='productos/small'>
            <ListItemText className='text1' primary="small"/>
          </Link>
          <Link className='button1' component="a" to='productos/medium'>
            <ListItemText className='text1' primary="medium"/>
          </Link>
          <Link className='button1' component="a" to='productos/big'>
            <ListItemText className='text1' primary="big"/>
          </Link>
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer