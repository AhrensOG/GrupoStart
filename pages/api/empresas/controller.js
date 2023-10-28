import { Empresas } from "../../../db/models/models"
import { BusinessImages } from "../../../db/models/models"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
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
      const { name, description, firstImage } = req.body;
      if(!name || !description || !firstImage) {
        return res.status(400).json('Missing Data')
      }

      const exist = await Empresas.findOne({ where: {name} })

      if (exist){
        return res.status(400).json('The Business already exist')
      } 

      await Empresas.create({
        name,
        description,
        firstImage
      })

      const created = await Empresas.findOne({where: { name }})

      created
      ? res.status(200).json(created)
      : res.status(400).json("Error creating the post");

    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  } else if(req.method === 'PUT') {
    try {
      const { id, name, description, firstImage } = req.body;

      if (!id) {
        return res.status(400).send("An id is requeried");
      } else {
        if (name) {
          await Empresas.update({ name }, { where: { id } });
        }
        if (description) {
          await Empresas.update({ description }, { where: { id } });
        }
        if (firstImage) {
          await Empresas.update({ firstImage }, { where: { id } });
        }
      }

      const post = await Empresas.findByPk(id)
      return res.status(200).send(post)
    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  } else if(req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if(!id) {
        return res.status(400).json('Missing Data')
      }
      const post = await Empresas.findByPk(id)
      if(!post) {
        return res.status(400).json('ID not found')
      }
      await Empresas.destroy({ where: { id } })
      res.status(200).json("Deleted Successfull")



    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
