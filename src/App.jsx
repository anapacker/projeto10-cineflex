import HomePage from './pages/HomePage/HomePage'
import SeatsPage from './pages/SeatsPage/SeatsPage'
import SessionPage from './pages/SessionsPage/SessionPage'
import SuccessPage from './pages/SuccessPage/SuccesPage'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

export default function App() {

  axios.defaults.headers.common['Authorization'] = 'PUUMyxjFhYFMy3AJlzKOuwfp'

  return (

    <BrowserRouter>
      <NavContainer>CINEFLEX</NavContainer>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sessoes/:idFilme' element={<SessionPage />} />
        <Route path='/assentos/:idSessao' element={<SeatsPage />} />
        <Route path='/sucesso' element={<SuccessPage />} />

      </Routes>

    </BrowserRouter>
  )
}

const NavContainer = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C3CFD9;
  color: #E8833A;
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  
`
