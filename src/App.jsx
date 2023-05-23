import { useState } from 'react'
import HomePage from './HomePage'
import SeatsPage from './SeatsPage'
import SessionsPage from './SessionPage'
import SuccessPage from './SucssesPage'
import styled from 'styled-components'

export default function App() {
  return (
      <>
         <NavContainer>CINEFLEX</NavContainer>

          <HomePage />
          {/* <SeatsPage /> */}
          {/* <SessionsPage /> */}
          {/* <SuccessPage /> */}
      </>
  )
}

const NavContainer = styled.div`
  width: 100%;
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
  a {
      text-decoration: none;
      color: #E8833A;
  }
`