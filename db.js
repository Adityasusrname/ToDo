const Sequelize = require('sequelize')

const db=new Sequelize({
    dialect:'mysql',
    database:'todo',
    username:'lucifer1',
    password:'Lucifer1!1'
})

const Tasks=db.define('tasks',{
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      description:{
        type:Sequelize.STRING,
        allowNull:false

      }
})

module.exports={db,Tasks}