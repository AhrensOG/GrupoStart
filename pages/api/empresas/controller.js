import { BusinessImages } from "../../../db/models/businessImages";
import { Empresas } from "../../../db/models/empresas";


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { name , id } = req.query;
      if ( name ) {
        const business = await Empresas.findOne({ where: { name }, include: { model: BusinessImages } })
        return res.status(200).json(business) 
      }
      if ( id ) {
        const business = await Empresas.findOne({ where: { id }, include: { model: BusinessImages } })
        return res.status(200).json(business) 
      }
      const data = await Empresas.findAll({
        include: {
          all: true
        }
      })
      return res.status(200).json(data)     
    } catch (error) {
      res.status(500).json(error.message)
    }
  } else if(req.method === 'POST') {
    try {
      const { name, description, firstImage, instagramLink, facebookLink, mapsLink, whatsappLink, categories, } = req.body;
      if(!name || !description || !firstImage ) {
        return res.status(400).json('Missing Data')
      }

      const exist = await Empresas.findOne({ where: {name} })

      if (exist){
        return res.status(400).json('The Business already exist')
      } 

      await Empresas.create({
        name,
        description,
        firstImage,
        instagramLink,
        facebookLink,
        mapsLink,
        whatsappLink,
        categories
      })

      const createdWithImages = await Empresas.findOne({where: { name }, include: { model: BusinessImages }})

      createdWithImages
      ? res.status(200).json(createdWithImages)
      : res.status(400).json("Error creating the post");

    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  } else if (req.method === 'PUT') {
    try {
      const { id, description, instagramLink, facebookLink, mapsLink, whatsappLink, categories } = req.body;
      
      if (!id || !description) {
        return res.status(400).json('Missing Data');
      }
  
      const business = await Empresas.findByPk(id);
  
      if (!business) {
        return res.status(404).json("Business not found");
      }
  
      // Actualizar los campos de la empresa
      business.description = description;
      business.instagramLink = instagramLink;
      business.facebookLink = facebookLink;
      business.mapsLink = mapsLink;
      business.whatsappLink = whatsappLink;
      business.categories = categories;
  
      await business.save();
  
      const updatedWithImages = await Empresas.findOne({
        where: { id },
        include: { model: BusinessImages },
      });
  
      return res.status(200).json(updatedWithImages);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json('Missing Data');
      }
      const business = await Empresas.findByPk(id);
      if (!business) {
        return res.status(400).json('ID not found');
      }
  
      // Eliminar imágenes asociadas al negocio antes de borrar la empresa
      await BusinessImages.destroy({ where: { EmpresaId: id } });
  
      await Empresas.destroy({ where: { id } });
      res.status(200).json("Deleted Successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
