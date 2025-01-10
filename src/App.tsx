import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomeScreen from "./individuals/home";
import Formulario from "./components/form/form";
import Sorteio from "./pages/sorteio/sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
