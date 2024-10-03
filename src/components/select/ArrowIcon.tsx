import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ArrowIconProps {
    isOpen: boolean;
}

const ArrowIcon = ({ isOpen }: ArrowIconProps) => {
    return isOpen ? <FaChevronUp /> : <FaChevronDown />;
};

export default ArrowIcon;