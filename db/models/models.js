import Empresas from './empresas'
import BusinessImages from './businessimages'
import User from './user'


Empresas.hasMany(BusinessImages, { foreignKey: 'BusinessID' })
BusinessImages.belongsTo(Empresas, { foreignKey: 'BusinessID' })

Empresas.sync({ alter: true })
BusinessImages.sync({ alter: true })


export { 
  Empresas,
  BusinessImages,
  User
}