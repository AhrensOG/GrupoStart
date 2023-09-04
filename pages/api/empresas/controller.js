import Empresas from "../../../db/models/empresas"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await Empresas.findAll()
      return res.status(200).json(data)     
    } catch (error) {
      res.status(500).json(error.message)
    }
  } else if(req.method === 'POST') {
    try {
      const { name, description, image } = req.body;
      if(!name || !description || !image) {
        return res.status(400).json('Missing Data')
      }

      await Empresas.create({
        name,
        description,
        image
      })

      const created = await Empresas.findOne({where: { name }})

      created
      ? res.status(200).json({"Created Successfull": created})
      : res.status(400).json("Error creating the post");

    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  } else if(req.method === 'PUT') {
    
  } else if(req.method === 'DELETE') {
    
  }
}
