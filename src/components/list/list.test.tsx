import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import List from "./list";
import { useList } from "../../state/hook/useList";

jest.mock("../../state/hook/useList", () => {
    return {
        useList: jest.fn()
    }
})

describe("lista vazia de participantes", () => {
    beforeEach(()=>{
        (useList as jest.Mock).mockReturnValue([])
    })

  test("uma lista de participante vazia deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });
});

describe("lista preenchida de participantes", () => {

    const participants = ["ana", "catarina"]
    beforeEach(()=>{
        (useList as jest.Mock).mockReturnValue(participants)
    })

    test("uma lista de participante vazia deve ser renderizada sem elementos", () => {
      render(
        <RecoilRoot>
          <List />
        </RecoilRoot>
      );
  
      const items = screen.queryAllByRole("listitem");
  
      expect(items).toHaveLength(participants.length);
    });
  });
