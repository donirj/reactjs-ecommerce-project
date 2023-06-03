import { CartProvider } from './context/CartContext';
// import { DarkModeProvider } from './context/DarkModeContext'
import { AuthProvider } from './context/AuthContext';
import AppRouter from './router/AppRouter';
import './App.scss'

function App() {

  return (

    <AuthProvider>
      <CartProvider>    
           <AppRouter /> 
      </CartProvider>
    </AuthProvider>
  )
}

export default App
