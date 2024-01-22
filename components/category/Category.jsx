import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar.js"; // Asegúrate de proporcionar la ruta correcta


const CategoryButton = ({ categories, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-[#0853fc] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#fb8a00] duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categorías
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-lg py-2 w-40">
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Uso del componente
const ExampleComponent = () => {
  const categories = [
    "Automotores",
    "Abogados",
    "Contadores",
    "Pastelería",
    "Panadería",
    "Profesores",
    "Venta de Autos",
    "Venta de Artículos de Celulares",
    "Reparación de Celulares",
    "Yuyus para el Mate",
  ];

  const handleCategorySelection = (selectedCategory) => {
    // Hacer algo con la categoría seleccionada, como filtrar las empresas, etc.
    console.log("Categoría seleccionada:", selectedCategory);
  };

  return (
    <div>
      <SearchBar />
      <CategoryButton
        categories={categories}
        onSelectCategory={handleCategorySelection}
      />
      {/* Otros componentes o lógica aquí */}
    </div>
  );
};

export default ExampleComponent;