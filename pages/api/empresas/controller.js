// controller.js
import { BusinessImages, Empresas } from "../../../db/models/models";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        return handleGetRequest(req, res);

      case 'POST':
        return handlePostRequest(req, res);

      case 'PUT':
        return handlePutRequest(req, res);

      case 'DELETE':
        return handleDeleteRequest(req, res);

      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

const handleGetRequest = async (req, res) => {
  const { name, id } = req.query;

  if (!Empresas) {
    return res.status(500).json("Empresas model is not defined");
  }

  if (name || id) {
    const business = await Empresas.findOne({
      where: { ...(name ? { name } : { id }) },
      include: BusinessImages,
    });

    if (!business) {
      return res.status(404).json("Business not found");
    }

    return res.status(200).json(business);
  }

  const data = await Empresas.findAll({
    include: { all: true }
  });

  return res.status(200).json(data);
};

const handlePostRequest = async (req, res) => {
  try {
    const { name, description, firstImage, instagramLink, facebookLink, mapsLink, whatsappLink, categories } = req.body;

    // Validar campos requeridos
    if (!name || !firstImage) {
      return res.status(400).json({ error: 'Datos faltantes' });
    }

    // Verificar si ya existe un negocio con el mismo nombre
    const exist = await Empresas.findOne({ where: { name } });

    if (exist) {
      return res.status(400).json({ error: 'El negocio ya existe' });
    }

    // Crear el negocio
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

    // Obtener el negocio creado con las imágenes asociadas
    const createdWithImages = await Empresas.findOne({
      where: { id: createdBusiness.id },
      include: BusinessImages
    });

    // Devolver el resultado
    return res.status(200).json(createdWithImages || createdBusiness);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const handlePutRequest = async (req, res) => {

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

};

const handleDeleteRequest = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json('Missing Data');
    }

    // Comprobamos si la columna BusinessImages.EmpresaId existe
    const hasEmpresaIdColumn = 'EmpresaId' in BusinessImages.rawAttributes;

    if (hasEmpresaIdColumn) {
      // Si la columna existe, eliminamos la empresa y las imágenes asociadas
      const business = await Empresas.findByPk(id);

      if (!business) {
        return res.status(404).json('Business not found');
      }

      const images = await BusinessImages.findAll({ where: { EmpresaId: id } });
      await Promise.all(images.map(async (image) => image.destroy()));
      await business.destroy();

      return res.status(200).json('Deleted Successfully');
    } else {
      // Si la columna no existe, eliminamos solo la empresa
      const business = await Empresas.findByPk(id);

      if (!business) {
        return res.status(404).json('Business not found');
      }

      await business.destroy();

      return res.status(200).json('Deleted Successfully');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};