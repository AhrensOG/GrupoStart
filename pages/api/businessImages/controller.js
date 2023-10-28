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
  } else if(req.method === 'POST') {
    try {
      const { name, url, businessId } = req.body;
      if(!name || !url || !businessId) {
        return res.status(400).json('Missing Data')
      }

      const business = await Empresas.findByPk(businessId)
      const exists = await BusinessImages.findOne({ where: { url } })

      if (!business){
        return res.status(400).json("Business doesn't exist")
      }
      if (exists) {
        return res.status(400).json("Image already exists")
      }

      await BusinessImages.create({
        name,
        url
      })

      const created = await BusinessImages.findOne({ where: { url } })
      
      await business.addBusinessImages(created)

      const actualized = await BusinessImages.findOne({ where: { url } })

      return res.status(200).json(actualized)
      
    } catch (error) {
      
    }
  } else if(req.method === 'PUT') {

  } else if(req.method === 'DELETE') {

  }
}