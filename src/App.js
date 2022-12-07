import styled from "styled-components";
import Movies from "./Movies";

function App() {
  return (
    <>
      <ScreenHeader>
        <h1>CINEFLEX</h1>
      </ScreenHeader>

      <TextCoontainer>
        <p>Selecione o filme</p>

      </TextCoontainer>

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
      padding: 20px 0 20px 0;
    }
`

const ScreenContainer = styled.div`
    min-width:100vw;
    min-height: 100vh;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    `
const TextCoontainer = styled.p`
    font-size:24px;
    font-family: 'Roboto';
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center ;
    align-items: center;

      
`

