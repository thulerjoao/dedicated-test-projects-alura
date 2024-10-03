import { atom } from "recoil";

export const usersListState = atom<string[]>({
    key: "usersListState",
    default: []
})