import styled from "styled-components";
import Navbar from "./components/Navbar";
import ExplorePage from "./ExplorePage";
// import Movies from "./ExplorePage";



function App() {
  return (
    <>
      <Navbar />

      <TextCoontainer>
        <p>Selecione o filme</p>

      </TextCoontainer>
      <ScreenContainer>

        <ExplorePage />
        {/* <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies /> */}

      </ScreenContainer>

    </>
  );
}



export default App;



const ScreenContainer = styled.div`
    min-width:100vw;
    /* min-height: 100vh; */
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    `
const TextCoontainer = styled.div`
    font-size:24px;
    font-family: 'Roboto';
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center ;
    align-items: center;

      
`

