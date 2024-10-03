import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./form";
import { RecoilRoot } from "recoil";

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
