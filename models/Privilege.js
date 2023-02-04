const { Sequelize, DataTypes } = require("sequelize")
const db = require("../database/db")

const PrivilegeModel = db.define("Privilege",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING
    },
    {
        timestamps: true
    }
)

module.exports = PrivilegeModel;