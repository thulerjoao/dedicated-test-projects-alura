import styled from "styled-components";

interface SelectElementProps {
  isOpen: boolean;
}

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 476px;
  height: 75px;
`;

export const SelectElement = styled.div<SelectElementProps>`
  padding: 0 32px;
  background-color: white;
  border-radius: 32px;
  border: 2px solid black;
  font-size: 16px;
  height: 100%;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #888;
  }
`;

export const StyledArrowIcon = styled.div`
  font-size: 20px;
  color: #333;
`;

export const DropdownList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    /* position: absolute; */
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 2px solid black;
    border-top: none;
    border-radius: 32px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
`;

export const DropdownItem = styled.li`

    padding: 10px 38px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
