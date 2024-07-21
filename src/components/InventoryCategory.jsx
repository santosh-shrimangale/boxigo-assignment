import { useState } from "react";

const InventoryCategory = ({ title, itemCount, children }) => {
    const [isOpen, setIsOpen] = useState(false); // State to manage toggle
  
    const toggleCategory = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="mb-4">
        <header className="flex items-center justify-between mb-2 px-4 py-2 bg-gray-200 rounded-md cursor-pointer" onClick={toggleCategory}>
          <h4 className="count-item font-semibold text-active">
            {title}
            <span className="item-count bg-blue-500 text-white py-1 px-3 rounded-full ml-2">
              {itemCount}
            </span>
          </h4>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon={isOpen ? "chevron-up" : "chevron-down"}
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d={isOpen
                ? "M240.971 130.524L35.226 324.878c-9.373 9.373-9.373 24.569 0 33.941l22.667 22.667c9.357 9.357 24.522 9.375 33.901 0L224 227.495l154.745 154.021c9.379 9.335 24.544 9.317 33.901 0l22.667-22.667c9.373-9.373 9.373-24.569 0-33.941L240.971 130.524c-9.373-9.372-24.569-9.372-33.942 0z"
                : "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}
            ></path>
          </svg>
        </header>
        {isOpen && (
          <div className="space-y-2 px-4 py-2">
            {children}
          </div>
        )}
      </div>
    );
};

export default InventoryCategory;
