import sequelize from "sequelize"
import { Sequelize } from "../db/dbconnect.js";

//Creating a DB coonection

const Users= Sequelize.define('users',{

     
    User_id:{
        type:sequelize.STRING(10),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true

    },
    email_address:{
        type:sequelize.STRING(255),
        allowNull:false
    },
    password:{
        type:sequelize.STRING(255),
        allowNull:false
    },
    full_name:{
        type:sequelize.STRING(255),
        allowNull:false
    }
},{sequelize,
tableName:'users',
timestamps:false,
indexes:[{
    name:"PRIMARY",
    unique:true,
    fields:[
       {name:"user_id"}
    ]}]
})
export default Users;