import { InputContainer } from "./style";
import addPerson from "../../images/add-person.png"

const Input = () => {
  return <InputContainer>
    <img src={addPerson} alt="addPerson"/>
    <input placeholder="Insira os nomes dos participantes" />
    <button>Adicionar</button>
  </InputContainer>;
};

export default Input;