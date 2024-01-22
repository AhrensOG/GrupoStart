import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import axios from 'axios';

const ListCompanyCards = ({ selectedCategory }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    // Aquí haces la llamada a la API para obtener la lista de empresas
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/empresas/controller'); // Asegúrate de que la ruta sea correcta
        const data = response.data;
        setCompanies(data);

        // Filtrar empresas por la categoría seleccionada
        if (selectedCategory) {
          const filtered = data.filter((company) => company.categories.includes(selectedCategory));
          setFilteredCompanies(filtered);
        } else {
          setFilteredCompanies(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]); // Ejecutar al montar el componente y al cambiar la categoría seleccionada

  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10'>
        {filteredCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            imageUrl={company.firstImage}
            name={company.name}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCompanyCards;