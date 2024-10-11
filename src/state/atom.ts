import { atom } from "recoil";

export const usersListState = atom<string[]>({
  key: "usersListState",
  default: [],
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});

export const sortResult = atom<Map<string, string>>({
  key: "sortResult",
  default: new Map(),
});
