import styled from "styled-components"

export default function Navbar() {
    return (
        <StyledNavbar>
            <h1>CINEFLEX</h1>
        </StyledNavbar>
    )
}


const StyledNavbar = styled.nav`
  background-color:#C3CFD9;
  display:flex;
  justify-content: center;
    h1{
      font-family:'Roboto';
      font-size:34px;
      font-weight: 400;
      color:#E8833A;
      padding: 20px 0 20px 0;
    }
`