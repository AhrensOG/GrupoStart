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
  const data = await BusinessImages.findAll({
    include: { all: true }
  });
  return res.status(200).json(data);
};

const handlePostRequest = async (req, res) => {
  const { listImage, businessId } = req.body;

  if (!listImage.length || !businessId) {
    return res.status(400).json('Missing Data');
  }

  const business = await Empresas.findByPk(businessId);

  if (!business) {
    return res.status(400).json("Business doesn't exist");
  }

  const imagesExist = await Promise.all(
    listImage.map(async (image) => BusinessImages.findOne({ where: { url: image.url } }))
  );

  if (imagesExist.some((image) => image)) {
    return res.status(400).json({ error: 'Existing Images', data: imagesExist.filter((image) => image) });
  }

  const createdImages = await Promise.all(
    listImage.map(async (image) => {
      const created = await BusinessImages.create({
        name: image.name,
        url: image.url,
      });
      await business.addBusinessImages(created);
      return created;
    })
  );

  const updatedBusiness = await Empresas.findOne({
    where: { id: businessId },
    include: { model: BusinessImages },
  });

  return res.status(200).json(updatedBusiness);
};

const handlePutRequest = async (req, res) => {
  const { imageId } = req.params;
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
};

const handleDeleteRequest = async (req, res) => {
  try {
    const { imageId } = req.query;

    if (!imageId) {
      return res.status(400).json('Missing Image ID');
    }

    const imageToDelete = await BusinessImages.findByPk(imageId);

    if (!imageToDelete) {
      return res.status(404).json('Image not found');
    }

    // Deleting the image
    await imageToDelete.destroy();

    return res.status(200).json('Image deleted successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
