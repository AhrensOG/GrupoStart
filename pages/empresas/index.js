import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import NuevoNavBar from '../../components/navBar/NuevoNavBar';
import CarouselFren from '../../components/carousel/CarouselFren';
import Footer from '../../components/footer/Footer';
import SearchBar from '../../components/search/SearchBar';
import ListCompanyCards from '../../components/listCompanyCards/ListCompanyCards';
import Wsp from '../../components/whatsapp/Wsp';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Empresas = () => {
  // Estado para controlar cuál navbar se muestra
  const [showNewNavbar, setShowNewNavbar] = useState(false);

  // Efecto para añadir el evento de desplazamiento y actualizar el estado
  useEffect(() => {
    const handleScroll = () => {
      // Obtén la posición de desplazamiento vertical
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Define el nuevo umbral de desplazamiento
      const scrollThreshold = 570; // Ajusta según tus necesidades

      // Actualiza el estado para mostrar el nuevo navbar si el desplazamiento supera el umbral
      setShowNewNavbar(scrollY > scrollThreshold);
    };

    // Agrega el evento de desplazamiento al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente para evitar pérdidas de rendimiento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  // Obtén la ruta actual
  const { asPath } = useRouter();

  // Determine si la ruta actual es '/empresas'
  const navbarButtons = asPath === '/empresas';

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div>
      <Head>
        <title>GrupoStart</title>
      </Head>
      {/* Mostrar el nuevo navbar o el antiguo según el estado */}
      {showNewNavbar ? (
        <NuevoNavBar servicesDropdown={!navbarButtons} />
      ) : (
        <NavBar servicesDropdown={!navbarButtons} />
      )}
      <CarouselFren />
      {/* Otros componentes */}
      <div style={{ height: '5rem' }}>
      {showNewNavbar ? null : <SearchBar />}
      </div>

      <ListCompanyCards />
      <Footer />
      <Wsp />
    </div>
  );
};

export default Empresas;