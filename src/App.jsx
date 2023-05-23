import { useState } from 'react'
import Navbars from './components/Navbars/Navbars'
import Home from './Pages/home/Home'
import { Route, Routes, Navigate } from 'react-router';
import PokeList from './components/PokeList/PokeList';
import PokeApi from './components/PokeList/PokeApi';
import AboutUs from './Pages/AboutUs/AboutUs';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext'
import Cart from './components/Cart/Cart';

function App() {


  return (
    <CartProvider>
      <DarkModeProvider>
        <Navbars />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos/:categoryId" element={<Home />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
            <Route path="/pokelist" element={<PokeList />} />
            <Route path="/pokeapi" element={<PokeApi />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path='*' element={<Navigate to={'/'}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            
          </Routes>
      </DarkModeProvider>
    </CartProvider>

  )
}

export default App
