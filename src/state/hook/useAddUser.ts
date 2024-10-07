import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, usersListState } from "../atom";

export const useAddUser = () => {
  const setList = useSetRecoilState(usersListState);
  const list = useRecoilValue(usersListState);
  const setErro = useSetRecoilState(erroState);
  return (userName: string) => {
    if (list.includes(userName)) {
      setErro("O nome já foi adicionado");
      setTimeout(() => {
        setErro("")
      }, 3000)
      return;
    }
    return setList((current) => [...current, userName]);
  };
};
