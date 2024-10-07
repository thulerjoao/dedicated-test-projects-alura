import React, { useRef, useState } from "react";
import { useAddUser } from "../../state/hook/useAddUser";
import { useErrorMessage } from "../../state/hook/useErrorMessage";

const Formulario = () => {
  const [nome, setNome] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const addUserList = useAddUser();
  const errorMessage = useErrorMessage();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUserList(nome);
    setNome("");
    inputRef.current?.focus();
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
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default Formulario;
