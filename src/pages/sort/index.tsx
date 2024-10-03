import { useState } from "react";
import Select from "../../components/select";
import logo from "../../images/logo.png";
import aviao from "../../images/aviao.png";
import participante from "../../images/participante.png";
import { SortScreenContainer } from "./style";
import dado from "../../images/dado.png";

const Sort = () => {
  const [names, setNames] = useState<string[]>([
    "João",
    "Maria",
    "José",
    "Lúcia",
  ]);

  return (
    <SortScreenContainer>
      <div className="imagens">
        <img src={logo} alt="logo" />
        <img src={participante} alt="participante" />
      </div>
      <div className="bottomComponent">
        <h1>Quem vai tirar o papelzinho?</h1>
        <Select list={names} />
        <h2>Clique em sortear para ver quem é seu amigo secreto!</h2>
        <div className="sortButton">
          <img src={dado} alt="botao de sortear" />
          <p>Sortear!</p>
        </div>
        <p className="result">Lúcia</p>
        <img src={aviao} alt="result" style={{ marginBottom: "5rem" }} />
      </div>
    </SortScreenContainer>
  );
};

export default Sort;
