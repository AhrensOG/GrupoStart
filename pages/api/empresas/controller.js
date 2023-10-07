// import Empresas from "../../../db/models/empresas"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // const data = await Empresas.findAll()
      return res.status(200).json('data')     
    } catch (error) {
      res.status(400).send({'ERROR': error})
    }
  // } else if(req.method === 'POST') {
  //   try {
  //     const { name, description, image } = req.body;
  //     if(!name || !description || !image) {
  //       return res.status(400).json('Missing Data')
  //     }

  //     await Empresas.create({
  //       name,
  //       description,
  //       image
  //     })

  //     const created = await Empresas.findOne({where: { name }})

  //     created
  //     ? res.status(200).json({"Created Successfull": created})
  //     : res.status(400).json("Error creating the post");

  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
    
  // } else if(req.method === 'PUT') {
  //   try {
  //     const { id, name, description, image } = req.body;

  //     if (!id) {
  //       return res.status(400).send("An id is requeried");
  //     } else {
  //       if (name) {
  //         await Empresas.update({ name }, { where: { id } });
  //       }
  //       if (description) {
  //         await Empresas.update({ description }, { where: { id } });
  //       }
  //       if (image) {
  //         await Empresas.update({ image }, { where: { id } });
  //       }
  //     }

  //     const post = await Empresas.findByPk(id)
  //     return res.status(200).send(post)
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
    
  // } else if(req.method === 'DELETE') {
  //   try {
  //     const { id } = req.query;
  //     if(!id) {
  //       return res.status(400).json('Missing Data')
  //     }
  //     const post = await Empresas.findByPk(id)
  //     if(!post) {
  //       return res.status(400).json('ID not found')
  //     }
  //     await Empresas.destroy({ where: { id } })
  //     res.status(200).json("Deleted Successfull")



  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  }
}
