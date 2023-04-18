import { useState } from 'react'
import Navbars from './components/Navbars/Navbars'
import Home from './Pages/home/Home'
import { Route, Routes } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App
