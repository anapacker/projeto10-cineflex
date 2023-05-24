import { useState } from 'react'
import HomePage from './HomePage'
import SeatsPage from './SeatsPage'
import SessionsPage from './SessionPage'
import SuccessPage from './SucssesPage'
import styled from 'styled-components'
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
        <Route path='/sessoes/:idFilme' element={<SeatsPage />} />
        <Route path='/assentos/:idSessao' element={<SuccessPage />} />

      </Routes>

    </BrowserRouter>
  )
}

