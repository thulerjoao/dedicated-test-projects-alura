import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useList } from "../../state/hook/useList";
import Rodape from "./rodape";

jest.mock("../../state/hook/useList", () => {
  return {
    useList: jest.fn(),
  };
});

const mockNavigation = jest.fn();
const mockSort = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

jest.mock("../../state/hook/useSort", () => {
  return {
    useSort: () => mockSort,
  };
});

describe("Participantes insuficientes", () => {
  beforeEach(() => {
    (useList as jest.Mock).mockReturnValue(["ana", "clara"]);
  });

  test("brincadeira nao pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("Participantes suficientes", () => {
  beforeEach(() => {
    (useList as jest.Mock).mockReturnValue(["ana", "clara", "joana"]);
  });

  test("brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("apos apertar o botao, o usuario tem que ser redirecionado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
    expect(mockSort).toHaveBeenCalledTimes(1);
  });
});
