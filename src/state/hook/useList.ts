import { useRecoilValue } from "recoil";
import { usersListState } from "../atom";

export const useList = () => {
  return useRecoilValue(usersListState);
};
