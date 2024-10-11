import { sortResult } from "../atom";
import { makeSort } from "./makeSort";

describe("Para realizar o sorteio", () => {
  test("cada participante nao sorteia o proprio nome", () => {
    const list = ["Ana", "Joao", "Pedro", "Carlos", "Nathan", "Raville"];

    const result = makeSort(list);
    list.forEach(participante => {
        const amigoSecreto = result.get(participante)
        expect(amigoSecreto).not.toEqual(participante)
    })
  });
});
