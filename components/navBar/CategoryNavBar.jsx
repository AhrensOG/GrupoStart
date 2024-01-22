import React, { useState } from "react";

const CategoryNavBar = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSubcategoriesVisible, setSubcategoriesVisible] = useState(false);

  const categories = [
    {
      name: "Diseño",
      subcategories: ["Logos", "Ilustraciones", "Tarjetas de Visita"],
    },
    {
      name: "Escritura",
      subcategories: ["Redacción de Contenido", "Corrección de Textos", "Traducciones"],
    },
    {
      name: "Programación",
      subcategories: ["Desarrollo Web", "Aplicaciones Móviles", "Diseño de Bases de Datos"],
    },
    // Puedes agregar más categorías según sea necesario
  ];

  const handleSubcategorySelect = (subcategory) => {
    // Informar al componente padre sobre la subcategoría seleccionada
    onCategorySelect(subcategory);
    setSubcategoriesVisible(false);
  };

  return (
    <div className="bg-[#0853fc] w-full z-10 h-[60px] flex items-center justify-center text-white border-t border-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className="mx-4 relative"
          onMouseEnter={() => {
            setActiveCategory(index);
            setSubcategoriesVisible(true);
          }}
          onMouseLeave={() => {
            setSubcategoriesVisible(false);
          }}
        >
          <button className="text-lg font-semibold focus:outline-none">
            {category.name}
          </button>

          {activeCategory === index && isSubcategoriesVisible && (
            <div className="absolute top-[20px] left-0 mt-1 p-2 bg-white text-[#0853fc] rounded-md shadow-md">
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="py-1">
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    {subcategory}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryNavBar;