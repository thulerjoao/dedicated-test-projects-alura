import { useState } from "react";
import { useList } from "../../state/hook/useList";
import { useSortResult } from "../../state/hook/useSortResult";

const Sorteio = () => {
  const list = useList();
  const [currentUser, setCurrentUser] = useState<string>("");
  const [secretFriend, setSecretFriend] = useState<string>("");
  const result = useSortResult();


  const sort = (event: React.FormEvent<HTMLFormElement>) => {
    setCurrentUser("dasdsa")
    event.preventDefault();
    const secretResult = result.get(currentUser);
    secretResult && setSecretFriend(secretResult);
  };

  return (
    <section>
      <form onSubmit={sort}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          value={currentUser || "Selecione o seu nome"}
          onChange={(event) => setCurrentUser(event.target.value)}
        >
          {list.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      <button>Sortear</button>
      </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </section>
  );
};

export default Sorteio;
