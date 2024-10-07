import { atom } from "recoil";

export const usersListState = atom<string[]>({
    key: "usersListState",
    default: []
})

export const erroState = atom<string>({
    key: "erroState",
    default: ""
})