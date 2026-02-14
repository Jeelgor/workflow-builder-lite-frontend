import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Health from './pages/Health'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/health' element={<Health />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  )
}

export default App