import { useState } from 'react'
import HomePage from './HomePage'
import SeatsPage from './SeatsPage'
import SessionPage from './SessionPage'
import SuccessPage from './SucssesPage'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {

  axios.defaults.headers.common['Authorization'] = 'PUUMyxjFhYFMy3AJlzKOuwfp'

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:idFilme' element={<SessionPage/>}/>
        <Route path='/assentos/:idSessao' element={<SeatsPage />} />
        <Route path='/sucesso' element={<SuccessPage />} />

      </Routes>

    </BrowserRouter>
  )
}

