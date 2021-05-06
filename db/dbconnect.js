import sequelize from "sequelize";
import dbconfig from "./config.js"



export const Sequelize=new sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle }
})

Sequelize.authenticate().then(()=>{
    console.log("Connection Successful")
}).catch(err=>{
    console.log("connection failed",err)
})

export default Sequelize;