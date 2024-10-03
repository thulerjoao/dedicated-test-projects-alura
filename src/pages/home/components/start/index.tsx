import Input from "../../../../components/input";
import play from "../../../../images/play.png";
import sacolas from "../../../../images/sacolas.png";
import { StartContainer } from "./style";

interface SortProps {
  names: string[];
  setForward: any;
}

const Start = ({ names, setForward }: SortProps) => {
  return (
    <StartContainer>
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
          <button onClick={()=> setForward(true)}>Iniciar brincadeira!</button>
        </div>
        <img src={sacolas} alt="sacolas" />
      </div>
    </StartContainer>
  );
};

export default Start;
