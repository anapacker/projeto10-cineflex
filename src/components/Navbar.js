import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <Link to="/">
          CINEFLEX
        </Link>
      </StyledNavbar>

    </>

  )
}


const StyledNavbar = styled.nav`
  background-color:#C3CFD9;
  display:flex;
  justify-content: center;
  
    a{
      text-decoration: none;
      font-family:'Roboto';
      font-size:34px;
      font-weight: 400;
      color:#E8833A;
      padding: 20px 0 20px 0;
    }
`

