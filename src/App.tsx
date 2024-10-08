import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomeScreen from "./pages/home";
import Formulario from "./components/form/form";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
