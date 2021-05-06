import sequelize from "sequelize"
import { Sequelize } from "../db/dbconnect.js";

//Creating a DB coonection

const Customers= Sequelize.define('Customers',{

     
    CustomerID:{
        type:sequelize.STRING(10),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true

    },
    CustomerName:{
        type:sequelize.STRING(255),
        allowNull:false
    },
    PhoneNo:{
        type:sequelize.STRING(255),
        allowNull:false
    },
    EmailAddress:{
        type:sequelize.STRING(255),
        allowNull:false
    }
},{sequelize,
tableName:'customers',
timestamps:false,
indexes:[{
    name:"PRIMARY",
    unique:true,
    fields:[
       {name:"CustomerID"}
    ]}]
})
export default Customers;