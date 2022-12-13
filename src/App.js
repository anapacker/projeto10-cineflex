import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SessionsPage from "./components/SessionsPage";
import HomePage from "./components/HomePage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {<Route path="/" element={<HomePage />} />}
          <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
          <Route path="/assentos/:idSessao" element={<SeatsPage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;