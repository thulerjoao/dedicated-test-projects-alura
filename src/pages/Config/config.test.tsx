import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from "./config";

const mockNavigation = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});
describe("pagina de configuraçao", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
