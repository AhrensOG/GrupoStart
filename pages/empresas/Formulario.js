import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/navBar/NavBar';
import FormularioCliente from '../../components/FormularioCliente';
import FormularioEdicion from '../../components/FormularioEdicion';

const Formulario = () => {
  return (
    <div>
      
      <Head>
        <title>Formulario de Cliente</title>
      </Head>
      <div>
        <h1>Formulario de Cliente</h1>
        <FormularioCliente />
        <FormularioEdicion />
      </div>
    </div>
  );
};

export default Formulario;
