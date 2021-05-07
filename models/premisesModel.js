import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

const Premise = sequelize.define('premise', {

    PremiseID: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    PremiseName: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    CustomerID: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    ZoneID: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    Classification: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    RouteNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PremiseStatus: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    MeterNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }  
}, {
    sequelize,
    tableName: 'premises',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "PremiseID" },
            ]
        },
    ]

});

export default Premise;