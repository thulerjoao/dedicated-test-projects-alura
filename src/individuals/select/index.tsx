import { useState } from "react";
import { DropdownItem, DropdownList, SelectContainer, SelectElement, StyledArrowIcon } from "./style";
import ArrowIcon from "./ArrowIcon";


interface SelectProps {
    list: string[];
}

const Select = ({ list }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <SelectContainer>
            <SelectElement onClick={toggleOpen} isOpen={isOpen}>
                {selectedValue || "Selecione seu nome"}
                <StyledArrowIcon>
                    <ArrowIcon isOpen={isOpen} />
                </StyledArrowIcon>
            </SelectElement>
            {isOpen && (
                <DropdownList>
                    {list.map((item, index) => (
                        <DropdownItem key={index} onClick={() => handleSelect(item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </SelectContainer>
    );
};

export default Select;
