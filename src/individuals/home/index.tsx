import { useState } from "react";
import logo from "../../images/logo.png";
import participante from "../../images/participante.png";
import Sort from "./components/sort";
import Start from "./components/start";
import { HomeScreenContainer } from "./style";

const HomeScreen = () => {
  const [foward, setForward] = useState<boolean>(false);
  const [names, setNames] = useState<string[]>([
    "João",
    "Maria",
    "José",
    "Lúcia",
  ]);

  return (
    <HomeScreenContainer>
      <div className="imagens">
        <img src={logo} alt="logo" />
        <img src={participante} alt="participante" />
      </div>
      {foward ? <Sort names={names} /> : <Start  setForward={setForward}/>}
    </HomeScreenContainer>
  );
};

export default HomeScreen;
