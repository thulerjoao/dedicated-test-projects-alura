import { fireEvent, render, screen } from "@testing-library/react";
import Input from ".";
import { RecoilRoot } from "recoil";

test("integration test between elements", () => {
  render(
    <RecoilRoot>
      <Input />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  const button = screen.getByRole("button");

  //garantir que o botao esteja no documento
  expect(button).toBeInTheDocument();

  //garantir que o botao esteja desabilitado
  expect(button).toBeDisabled()

  //usuário adicione nome ao input
  fireEvent.change(input, {
    target: {
      value: "ana vitória",
    },
  });

  //check name change
  expect(input).toHaveValue("ana vitória");

  //clique no botao
  fireEvent.click(button);

  //botao tenha valor vazio
  expect(input).toHaveValue("");

  //botao estaja em foco
  expect(input).toHaveFocus();
});
