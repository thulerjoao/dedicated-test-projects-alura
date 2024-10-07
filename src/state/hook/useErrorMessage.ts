import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

export const useErrorMessage = () => {
  const erroMessage = useRecoilValue(erroState);
  return erroMessage
};
