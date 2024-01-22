import { BusinessImages } from "../../../db/models/models";
import { Empresas } from "../../../db/models/models";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { name, id } = req.query;
    if (!Empresas) {
      return res.status(500).json("Empresas model is not defined");
    }

    if (name || id) {
      const business = await Empresas.findOne({ where: { ...(name ? { name } : { id }) }, include: BusinessImages });
      if (!business) {
        return res.status(404).json("Business not found");
      }
      return res.status(200).json(business);
    }

    const data = await Empresas.findAll({
      include: {
        all: true
      }
    });

    return res.status(200).json(data);
  } else if (req.method === 'POST') {
    try {
      const { name, description, firstImage, instagramLink, facebookLink, mapsLink, whatsappLink, categories } = req.body;

      if (!name || !description || !firstImage) {
        return res.status(400).json('Missing Data');
      }

      const exist = await Empresas.findOne({ where: { name } });

      if (exist) {
        return res.status(400).json('The Business already exists');
      }

      const createdBusiness = await Empresas.create({
        name,
        description,
        firstImage,
        instagramLink,
        facebookLink,
        mapsLink,
        whatsappLink,
        categories
      });

      const createdWithImages = await Empresas.findOne({
        where: { id: createdBusiness.id },
        include: BusinessImages
      });

      return res.status(200).json(createdWithImages || createdBusiness); // Use createdBusiness if createdWithImages is undefined
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  } else if (req.method === 'PUT') {
    try {
      const { id, firstImage, description, instagramLink, facebookLink, mapsLink, whatsappLink, categories } = req.body;

      if (!id || !description) {
        return res.status(400).json('Missing Data');
      }
      

      const business = await Empresas.findByPk(id);

      if (!business) {
        return res.status(404).json("Business not found");
      }
      if (firstImage) {
        business.firstImage = firstImage;
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
        include: BusinessImages,
      });

      return res.status(200).json(updatedWithImages || business); // Use business if updatedWithImages is undefined
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
      return res.status(200).json("Deleted Successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  }
}