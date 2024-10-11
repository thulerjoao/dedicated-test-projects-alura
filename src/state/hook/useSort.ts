import { useSetRecoilState } from "recoil";
import { sortResult } from "../atom";
import { makeSort } from "../helpers/makeSort";
import { useList } from "./useList";

export const useSort = () => {
  const list = useList();
  const setResult = useSetRecoilState(sortResult);

  return () => {
    const result = makeSort(list);
    setResult(result);
  };
};
