import React, { useRef, useState } from "react";
import { useAddUser } from "../../state/hook/useAddUser";

const Formulario = () => {
  const [nome, setNome] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const addUserList = useAddUser()

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUserList(nome)
    setNome("")
    inputRef.current?.focus()
  };


  return (
    <form onSubmit={submit}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  );
};

export default Formulario;
