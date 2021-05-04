import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

const Bill = sequelize.define('bill', {

    PaymentID: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    BillStatus: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    Bill: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CustomerID: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    StaffID: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    Balance: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'customer_payments',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "PaymentID" },
            ]
        },
    ]

});

export default Bill;