import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./form";

describe("Comportamento do formulario.tsx", () => {
  test("when input is empty, new users can`t be added", () => {
    //encontar DOM
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontar input no elemento
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //encontar butao
    const button = screen.getByRole("button");
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botao esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("add new user in case there is some name already", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    //inserir valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botao
    fireEvent.click(button);
    //verificar input seja limpo
    expect(input).toHaveFocus();
    //garantir input vazio
    expect(input).toHaveValue("");
  });

  test("nomes duplicados nao podem estar repetidos n alista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    //inserir valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    //inserindo mesmo valor
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botao
    fireEvent.click(button);

    const menssagemDeErro = screen.getByRole("alert");

    expect(menssagemDeErro).toBeInTheDocument();

    expect(menssagemDeErro.textContent).toBe("O nome já foi adicionado");
  });

  test("a mensagem de erro deve sumir após o timer", async () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    //inserir valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(button);

    //inserindo mesmo valor
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botao
    fireEvent.click(button);

    let menssagemDeErro = screen.queryByRole("alert"); //query n acusa erro caso nao encontre
    expect(menssagemDeErro).toBeInTheDocument();

    //esperar N segundos
    //toda funçao que tenha timer será "esperada"

    act(() => {
      //depricated but works
      jest.runAllTimers();
    });

    await waitFor(() => {
      //not necessary if there`s act, but without it is a solution
      menssagemDeErro = screen.queryByRole("alert");
      expect(menssagemDeErro).toBeNull();
    });
  });
});
