// src/components/NavBar.tsx
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Farmácia</h1>
      {/* Aqui você pode adicionar links para outras páginas, por exemplo: */}
      {/* <ul className="flex space-x-4">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Produtos</a></li>
      </ul> */}
    </nav>
  );
};

export default NavBar;