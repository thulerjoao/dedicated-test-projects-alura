import { useState } from "react";
import Input from "../../components/input";
import logo from "../../images/logo.png";
import play from "../../images/play.png";
import sacolas from "../../images/sacolas.png";
import participante from "../../images/participante.png";
import { HomeScreenContainer } from "./style";

const HomeScreen = () => {
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
      <div className="bottomComponent">
        <h1>Vamos começar!</h1>
        <Input />
        {names && (
          <li>
            {names.map((name) => {
              return <ul>{name}</ul>;
            })}
          </li>
        )}
        <div className="playContainer">
          <div className="playButton">
            <img src={play} alt="play" />
            <button>Iniciar brincadeira!</button>
          </div>
          <img src={sacolas} alt="sacolas" />
        </div>
      </div>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
