import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

const Route = sequelize.define('route', {
  RouteNumber: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  RouteStatus: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  ZoneID: {
    type: Sequelize.STRING(10),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'routes',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "RouteNumber" },
      ]
    },
  ]

});

export default Route;