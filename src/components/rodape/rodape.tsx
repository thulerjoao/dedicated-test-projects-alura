import { useNavigate } from "react-router-dom";
import { useList } from "../../state/hook/useList";
import { useSort } from "../../state/hook/useSort";

const Rodape = () => {
  const list = useList();
  const navigate = useNavigate();
  const makeSort = useSort();

  const start = () => {
    makeSort();
    navigate("/sorteio");
  };

  return (
    <footer>
      <button onClick={start} disabled={list.length < 3}>
        Iniciar Brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
