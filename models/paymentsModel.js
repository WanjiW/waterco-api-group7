import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnection.js";

const Payment = sequelize.define('payment', {

    PaymentID: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    Bill: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    BillStatus: {
        type: Sequelize.STRING(10),
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
    },
    PremiseID: {
        type: Sequelize.STRING,
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

export default Payment;