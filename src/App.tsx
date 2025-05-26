import React from 'react';
import HouseConfigurator from './components/HouseConfigurator';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <HouseConfigurator />
      </main>
    </div>
  );
}

export default App;