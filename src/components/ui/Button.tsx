import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  active = false,
  icon
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium
        transition-colors duration-200 ease-in-out
        ${active 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;