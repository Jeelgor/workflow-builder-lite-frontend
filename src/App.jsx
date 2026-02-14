import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Health from './pages/Health'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/health' element={<Health />} />
    </Routes>
  )
}

export default App