import styled from "styled-components";
import Movies from "./Movies";

function App() {
  return (
    <>
      <ScreenHeader>
        <h1>CINEFLEX</h1>
      </ScreenHeader>

      <ScreenContainer>
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />

      </ScreenContainer>

    </>
  );
}



export default App;


const ScreenHeader = styled.div`
  background-color:#C3CFD9;
  display:flex;
  justify-content: center;
    h1{
      font-family:'Roboto';
      font-size:34px;
      font-Weigth:400;
      color:#E8833A;
    }
`

const ScreenContainer = styled.div`
    min-width:100%;
`
