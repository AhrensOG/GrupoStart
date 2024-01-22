import React, { useState, useEffect } from 'react';
import NavBar from "../components/navBar/NavBar";
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { app } from './firebase/firebase';

const EditarEmpresa = () => {
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    firstImage: null,
    instagramLink: '',
    facebookLink: '',
    mapsLink: '',
    whatsappLink: '',
    categories: [],
    carouselImages: [],
  });

  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/empresas/controller');
        setCompanyList(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de empresas:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleCompanyChange = async (e) => {
    const companyId = e.target.value;
    setSelectedCompanyId(companyId);

    if (companyId) {
      try {
        const response = await axios.get(`/api/empresas/controller?id=${companyId}`);
        const empresa = response.data;

        setFormData({
          id: empresa.id,
          name: empresa.name,
          description: empresa.description,
          firstImage: null,
          instagramLink: empresa.instagramLink,
          facebookLink: empresa.facebookLink,
          mapsLink: empresa.mapsLink,
          whatsappLink: empresa.whatsappLink,
          categories: empresa.categories,
          carouselImages: empresa.BusinessImages,
        });
      } catch (error) {
        console.error('Error al obtener datos de la empresa:', error);
      }
    }
  };

  const handleEditClick = async () => {
    try {
      setLoading(true);

      const storage = getStorage(app);

      if (formData.firstImage) {
        const storageRefMainImage = ref(storage, `main_images/${formData.firstImage.name}`);
        await uploadBytes(storageRefMainImage, formData.firstImage);
        const downloadURLMainImage = await getDownloadURL(storageRefMainImage);
        formData.firstImage = downloadURLMainImage;
      }

      const uploadTasks = formData.carouselImages.map(async (file) => {
        const storageRef = ref(storage, `carousel_images/${file.name}`);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);
        return { name: file.name, url: downloadURL };
      });

      const imageURLs = await Promise.all(uploadTasks);

      formData.carouselImages = imageURLs;
      console.log(formData)
      const response = await axios.put('/api/empresas/controller', formData);
      console.log('Empresa editada:', response.data);
    } catch (error) {
      console.error('Error al editar la empresa:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleImageChange = (e) => {
    try {
      const images = Array.from(e.target.files);
      setFormData((prevData) => ({ ...prevData, carouselImages: [...prevData.carouselImages, ...images] }));
    } catch (error) {
      console.error('Error al manejar las imágenes:', error);
    }
  };

  const handleMainImageChange = (e) => {
    const image = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, firstImage: image }));
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.carouselImages];
    updatedImages.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, carouselImages: updatedImages }));
  };

  return (
    <div>
      <NavBar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEditClick();
        }}
        style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', borderRadius: '10px', border: '1px solid #ccc' }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label>
            Seleccionar Empresa:
            <select value={selectedCompanyId} onChange={handleCompanyChange}>
              <option value="">Seleccione una empresa</option>
              {companyList.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </label>
        </div>

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
            <input type="text" name="name" value={formData.name} readOnly />
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
          <div>
            Imágenes Actuales:
            {formData.carouselImages.map((image, index) => (
              <div key={index}>
                {image.name} - <img src={image.url} alt={`carousel-${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <button type="button" onClick={() => handleRemoveImage(index)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
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
              <li onClick={() => handleCategoryClick('Derecho Previsional')}>Derecho Previsional</li>
              <li onClick={() => handleCategoryClick('Técnico')}>Técnico</li>
              <li onClick={() => handleCategoryClick('Autos')}>Autos</li>
              <li onClick={() => handleCategoryClick('Ferretería')}>Ferretería</li>
              <li onClick={() => handleCategoryClick('Pastelería')}>Pastelería</li>
              <li onClick={() => handleCategoryClick('Panadería')}>Panadería</li>
              <li onClick={() => handleCategoryClick('Seguros')}>Seguros</li>
            </ul>
            <button onClick={handleCategoryDialogClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditarEmpresa;
