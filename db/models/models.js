import Empresas from './empresas'
import BusinessImages from './businessImages'
import User from './user'
import connection from '.'


Empresas.hasMany(BusinessImages, { foreignKey: 'BusinessID' })
BusinessImages.belongsTo(Empresas, { foreignKey: 'BusinessID' })

connection.sync({ alter: true })


export { 
  Empresas,
  BusinessImages,
  User
}