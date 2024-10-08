import { useNavigate } from "react-router-dom";
import { useList } from "../../state/hook/useList";

const Rodape = () => {
    const list = useList()
    const navigate = useNavigate()
    
  return (
    <footer>
      <button onClick={()=> navigate("/sorteio")} disabled={list.length < 3}>Iniciar Brincadeira</button>
    </footer>
  );
};

export default Rodape;
