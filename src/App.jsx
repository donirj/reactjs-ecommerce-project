import { useState } from 'react'
import Navbars from './components/Navbars/Navbars'
import Home from './Pages/home/Home'
import { Route, Routes, Navigate } from 'react-router';
import HookTest from './hooks/HookTest';
import PokeList from './components/PokeList/PokeList';
import PokeApi from './components/PokeList/PokeApi';
import ItemList2 from './ejemplos/hoc/ItemList2';
import Navbar2 from './components/Navbars/Navbar2';
import AboutUs from './Pages/AboutUs/AboutUs';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbars />
      {/* <Navbar2 /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:categoryId" element={<Home />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>

          <Route path="/pokelist" element={<PokeList />} />
          <Route path="/pokeapi" element={<PokeApi />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path='*' element={<Navigate to={'/'}/>}/>

        </Routes>
    </div>
  )
}

export default App
