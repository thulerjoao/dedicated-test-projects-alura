import { render, screen } from "@testing-library/react";
import Formulario from "./form";

//jest
test("when input is empty, new users can`t be added", () => {
  //encontar DOM
  render(<Formulario />);

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
