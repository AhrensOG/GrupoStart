import { BusinessImages } from "../../../db/models/models";
import { Empresas } from "../../../db/models/models";


export default async function handler(req, res) {
  if(req.method === 'GET') {
    try {
      const data = await BusinessImages.findAll({
        include: {
          all: true
        }
      })
      return res.status(200).json(data)     
    } catch (error) {
      res.status(500).json(error.message)
    }
  } else // Controlador para editar carrusel de empresas
  if (req.method === 'POST') {
    try {
      const { listImage, businessId } = req.body;
  
      console.log(listImage); // Verificar las imágenes en la consola del servidor
  
      if (listImage.length === 0 || !businessId) {
        return res.status(400).json('Missing Data');
      }
  
      const business = await Empresas.findByPk(businessId);
  
      if (!business) {
        return res.status(400).json("Business doesn't exist");
      }
  
      let imagesExists = [];
  
      for (let i = 0; i < listImage.length; i++) {
        const exists = await BusinessImages.findOne({ where: { url: listImage[i].url } });
  
        if (exists) {
          imagesExists.push(exists);
        }
      }
  
      if (imagesExists.length > 0) {
        return res.status(400).send({ error: 'Imágenes existentes', data: imagesExists });
      }
  
      for (let i = 0; i < listImage.length; i++) {
        await BusinessImages.create({
          name: listImage[i].name,
          url: listImage[i].url,
        });
  
        const created = await BusinessImages.findOne({ where: { url: listImage[i].url } });
        await business.addBusinessImages(created);
      }
  
      const updated = await Empresas.findOne({ where: { id: businessId }, include: { model: BusinessImages } });
  
      return res.status(200).json(updated);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  }
  else if (req.method === 'PUT') {
    try {
      const { imageId } = req.params; // Suponiendo que imageId es parte de los parámetros de la ruta
      const { name, url } = req.body;
  
      if (!imageId) {
        return res.status(400).json('Missing Image ID');
      }
  
      const imageToUpdate = await BusinessImages.findByPk(imageId);
  
      if (!imageToUpdate) {
        return res.status(404).json("Image not found");
      }
  
      // Actualizar la información de la imagen
      if (name) {
        imageToUpdate.name = name;
      }
  
      if (url) {
        imageToUpdate.url = url;
      }
  
      // Guardar los cambios
      await imageToUpdate.save();
  
      return res.status(200).json(imageToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  } else if(req.method === 'DELETE') {

  }
}