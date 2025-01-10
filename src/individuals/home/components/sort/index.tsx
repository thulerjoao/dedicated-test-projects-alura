import aviao from "../../../../images/aviao.png";
import Select from "../../../select";
import dado from "../../../../images/dado.png";
import { SortContainer } from "./style";

interface SortProps {
  names: string[];
}

const Sort = ({ names }: SortProps) => {
  return (
    <SortContainer>
      <h1>Quem vai tirar o papelzinho?</h1>
      <Select list={names} />
      <h2>Clique em sortear para ver quem é seu amigo secreto!</h2>
      <div className="sortButton">
        <img src={dado} alt="botao de sortear" />
        <p>Sortear!</p>
      </div>
      <p className="result">Lúcia</p>
      <img src={aviao} alt="result" style={{ marginBottom: "5rem" }} />
    </SortContainer>
  );
};

export default Sort;
