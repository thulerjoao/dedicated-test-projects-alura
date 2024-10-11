import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useList } from "../../state/hook/useList";
import Sorteio from "./sorteio";
import { useSortResult } from "../../state/hook/useSortResult";

jest.mock("../../state/hook/useList", () => {
  return {
    useList: jest.fn(),
  };
});

jest.mock("../../state/hook/useSortResult", () => {
  return {
    useSortResult: jest.fn(),
  };
});

describe("pagina de sorteio", () => {
  const list = ["Ana", "Catarina", "Pedro"];
  const result = new Map([
    ["Ana","Pedro"],
    ["Pedro","Catarina"],
    ["Catarina","Ana"]
  ])
  beforeEach(() => {
    (useList as jest.Mock).mockReturnValue(list);
    (useSortResult as jest.Mock).mockReturnValue(result);
  });

 

  test("todos os participantes podem exibir seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    
    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(list.length);
  });

  test("amigo secreto é exibido quando solicidado",()=>{
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );


    const select = screen.getByRole("combobox")
    fireEvent.change(select, {
      target: {
        value: list[0]
      }
    })
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    const secretFriend = screen.getByRole("alert")

    expect(secretFriend).toBeInTheDocument()

    expect(secretFriend).toBeInTheDocument()
    
  })
});
