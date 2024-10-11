import { useRecoilValue } from "recoil";
import { sortResult } from "../atom";

export const useSortResult = () => {
  return useRecoilValue(sortResult);
};
