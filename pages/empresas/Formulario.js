import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/navBar/NavBar';
import FormularioCliente from '../../components/FormularioCliente';
import FormularioEdicion from '../../components/FormularioEdicion';
import FormularioDelete from '../../components/FormularioDelete';

const Formulario = () => {
  return (
    <div>
      
      <Head>
        <title>Formulario de Cliente</title>
      </Head>
      <div>
        {/* < NavBar/> */}
        <FormularioDelete />
        <FormularioCliente />
        <FormularioEdicion />
      </div>
    </div>
  );
};

export default Formulario;
