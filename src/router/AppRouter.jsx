import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import Navbars from '../components/Navbars/Navbars'
import Home from '../Pages/home/Home'
import PokeList from '../components/PokeList/PokeList';
import PokeApi from '../components/PokeList/PokeApi';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Contact from '../components/Contact/Contact';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import RegisterScreen from '../components/LoginScreen/RegisterScreen'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Checkout from '../components/Checkout/Checkout';

const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <>
            { 
                user.logged
                ? <>
                    <Navbars />
                    {/* private routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos/:categoryId" element={<Home />} />
                        <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
                        <Route path="/pokelist" element={<PokeList />} />
                        <Route path="/pokeapi" element={<PokeApi />} />
                        <Route path='/cart' element={<Cart/>}/>
                        {user.logged}
                        <Route path="/nosotros" element={<AboutUs />} />
                        <Route path='*' element={<Navigate to={'/'}/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>

                    </Routes>
                </>

                /* public routes */
                :
                    <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route path='*' element={<Navigate to="/login"/>} />
                    </Routes>
            }

        </>
    );
}

export default AppRouter;
