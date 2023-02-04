const {Sequelize, DataTypes} = require("sequelize")
const db = require("../database/db")

const Product_Model = db.define("product",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = Product_Model;