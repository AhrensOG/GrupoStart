import React, { useState } from 'react';
import NavBar from "../components/navBar/NavBar";
import { useRouter } from 'next/router';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { app } from './firebase/firebase';
import axios from 'axios';

const FormularioCliente = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    categories: [],
    firstImage: '',  // Cambiado a cadena vacía por defecto
    instagramLink: '',
    facebookLink: '',
    mapsLink: '',
    whatsappLink: '',
    carouselImages: [],
  });

  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryDialogOpen = () => {
    setCategoryDialogOpen(true);
  };

  const handleCategoryDialogClose = () => {
    setCategoryDialogOpen(false);
  };

  const handleCategoryClick = (category) => {
    const updatedCategories = [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    setFormData((prevData) => ({ ...prevData, categories: updatedCategories }));
  };

  const handleRemoveCategory = (removedCategory) => {
    const updatedCategories = selectedCategories.filter((category) => category !== removedCategory);
    setSelectedCategories(updatedCategories);
    setFormData((prevData) => ({ ...prevData, categories: updatedCategories }));
  };

  const handleImageChange = async (e) => {
    try {
      const images = Array.from(e.target.files);
      setFormData((prevData) => ({ ...prevData, carouselImages: images }));
    } catch (error) {
      console.error('Error al manejar las imágenes:', error);
    }
  };

  const handleMainImageChange = async (e) => {
    try {
      const image = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, firstImage: image }));
    } catch (error) {
      console.error('Error al manejar la imagen principal:', error);
    }
  };

  const handleGuardarClick = async () => {
    try {
      setLoading(true);

      const storage = getStorage(app);

      // Cambios en la carga de la imagen principal
      let downloadURLMainImage = '';
      if (formData?.firstImage) {
        const storageRefMainImage = ref(storage, `main_images/${formData?.firstImage?.name}`);
        await uploadBytes(storageRefMainImage, formData?.firstImage);
        downloadURLMainImage = await getDownloadURL(storageRefMainImage);
      } else {
        // Si no se carga la imagen principal, asigna una URL por defecto o muestra "not found"
        downloadURLMainImage = 'https://example.com/default-image.jpg';  // Cambia esto a la URL por defecto que desees
        // O puedes asignar una cadena vacía ('') para mostrar "not found"
        // downloadURLMainImage = '';
      }

      // Cambios en la carga de las imágenes del carrusel
      let imageURLs = [];
      if (formData?.carouselImages.length > 0) {
        const uploadTasks = formData?.carouselImages?.map(async (file) => {
          const storageRef = ref(storage, `carousel_images/${file.name}`);
          await uploadBytes(storageRef, file);
  
          const downloadURL = await getDownloadURL(storageRef);
          const objectImage = {
            name: file.name,
            url: downloadURL
          }
  
          return objectImage;
        });
  
        imageURLs = await Promise.all(uploadTasks);
      }

      // Actualizar el formData con la URL de la imagen principal
      setFormData((prevData) => ({ ...prevData, firstImage: downloadURLMainImage }));
      let bodyBusiness = formData;
      bodyBusiness.firstImage = downloadURLMainImage;

      // Realizar la petición POST para agregar el nuevo cliente
      const resBusiness = await axios.post('/api/empresas/controller', bodyBusiness);

      // Si hay imágenes del carrusel, agregarlas a la base de datos
      if (imageURLs.length > 0) {
        const bodyBusinessImages = {
          businessId: resBusiness.data.id,
          listImage: imageURLs
        } 
  
        const resBusinessImages = await axios.post('/api/businessImages/controller', bodyBusinessImages);
        console.log(resBusinessImages.data);
      }

      console.log(resBusiness.data);
      router.push(`/empresas/exclusive/${resBusiness.data.name}`);
    } catch (error) {
      console.error('Error al guardar en la base de datos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGuardarClick();
        }}
        style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', borderRadius: '10px', border: '1px solid #ccc' }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label>
            Imagen Principal URL:
            <input type="file" name="mainImage" onChange={handleMainImageChange} accept="image/*" />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Instagram Link:
            <input type="text" name="instagramLink" value={formData.instagramLink} onChange={handleChange} />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Facebook Link:
            <input type="text" name="facebookLink" value={formData.facebookLink} onChange={handleChange} />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Google Maps Link:
            <input type="text" name="mapsLink" value={formData.mapsLink} onChange={handleChange} />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            WhatsApp Link:
            <input type="text" name="whatsappLink" value={formData.whatsappLink} onChange={handleChange} />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Título:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Descripción:
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <button type="button" onClick={handleCategoryDialogOpen}>
            Seleccionar Categorías
          </button>
          <div>
            Categorías Seleccionadas:
            <ul>
              {selectedCategories.map((category, index) => (
                <li key={index}>
                  {category}
                  <button type="button" onClick={() => handleRemoveCategory(category)}>
                    ..X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Imágenes para el Carrusel:
            <input type="file" name="carouselImages" onChange={handleImageChange} multiple accept="image/*" />
          </label>
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </form>

      {categoryDialogOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '300px' }}>
            <h2>Categorías</h2>
            <ul>
              <li onClick={() => handleCategoryClick('Derecho Civil')}>Derecho Civil</li>
              <li onClick={() => handleCategoryClick('Derecho Penal')}>Derecho Penal</li>
              <li onClick={() => handleCategoryClick('Familiar')}>Familiar</li>
              <li onClick={() => handleCategoryClick('Derecho Previcional')}>Derecho Previcional</li>
              <li onClick={() => handleCategoryClick('Tecnico')}>Tecnico</li>
              <li onClick={() => handleCategoryClick('Autos')}>Autos</li>
              <li onClick={() => handleCategoryClick('Ferreteria')}>Ferreteria</li>
              <li onClick={() => handleCategoryClick('Pasteleria')}>Pastelereia</li>
              <li onClick={() => handleCategoryClick('Panaderia')}>Panaderia</li>
              <li onClick={() => handleCategoryClick('Seguros')}>Seguros</li>
              {/* Agrega otras opciones de categoría aquí */}
            </ul>
            <button onClick={handleCategoryDialogClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioCliente;
