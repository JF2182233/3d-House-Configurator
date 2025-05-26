import React from 'react';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-4 py-4 flex items-center">
      <div className="container mx-auto flex items-center">
        <Home className="h-6 w-6 text-blue-600 mr-2" />
        <h1 className="text-xl font-semibold text-gray-800">3D House Configurator</h1>
      </div>
    </header>
  );
};

export default Header;