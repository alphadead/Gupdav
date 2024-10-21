import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { HoverBorderGradient } from './ui/hover-border-gradient';

interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 w-3/4">
            <button
                onClick={toggleCollapse}
                className="w-full px-4 py-8 text-white bg-transparent cursor-pointer transition-all text-xl"
            >
                <span className="flex items-center">
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                    <span className="ml-2">{title}</span>
                </span>
            </button>
            <div
                className={`text-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'
                    } border border-white/20 rounded-lg bg-white/10`}
            >
                <div className="px-4 py-3 text-xl">{children}</div>
            </div>
        </div>
    );
};

export default Collapsible;
