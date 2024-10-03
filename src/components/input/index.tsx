import { useRef, useState } from "react";
import addPerson from "../../images/add-person.png";
import { useAddUser } from "../../state/hook/useAddUser";
import { InputContainer } from "./style";

const Input = () => {
  const [name, setName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const addName = useAddUser();

  const handleSubmit = () => {
    addName(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <InputContainer>
      <img src={addPerson} alt="addPerson" />
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!name} onClick={() => handleSubmit()}>
        Adicionar
      </button>
    </InputContainer>
  );
};

export default Input;
