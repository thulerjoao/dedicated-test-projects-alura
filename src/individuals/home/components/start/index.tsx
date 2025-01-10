import play from "../../../../images/play.png";
import sacolas from "../../../../images/sacolas.png";
import { useErrorMessage } from "../../../../state/hook/useErrorMessage";
import { useList } from "../../../../state/hook/useList";
import Input from "../../../input";
import { StartContainer } from "./style";

interface SortProps {
  setForward: any;
}

const Start = ({ setForward }: SortProps) => {
  const list = useList();
  const errorMessage = useErrorMessage();

  return (
    <StartContainer>
      <h1>Vamos começar!</h1>
      <Input />
      {errorMessage && <p role="alert">{errorMessage}</p>}
      {list && (
        <li>
          {list.map((name) => {
            return <ul>{name}</ul>;
          })}
        </li>
      )}
      <div className="playContainer">
        <div className="playButton">
          <img src={play} alt="play" />
          <button onClick={() => setForward(true)}>Iniciar brincadeira!</button>
        </div>
        <img src={sacolas} alt="sacolas" />
      </div>
    </StartContainer>
  );
};

export default Start;
