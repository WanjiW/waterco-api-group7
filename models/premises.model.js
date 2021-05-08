import sequelize from "sequelize"
import { Sequelize } from "../db/dbconnect.js";

//Creating a DB coonection

const Premises = Sequelize.define('Premises', {


    PremiseID: {
        type: sequelize.INTEGER(255),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    PremiseName: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    CustomerID: {
        type: sequelize.INTEGER(255),
        allowNull: false
    },
    ZoneID: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    Classification: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    RouteNumber: {
        type: sequelize.INTEGER(255),
        allowNull: false
    },
    PremiseStatus: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    MeterNumber: {
        type: sequelize.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'premises',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "PremiseID" }
        ]
    }]
})
export default Premises;