import { useSetRecoilState } from "recoil";
import { usersListState } from "../atom";

export const useAddUser = () => {
  const setList = useSetRecoilState(usersListState);
  return (userName: string) => {
    return setList((current) => [...current, userName]);
  };
};
