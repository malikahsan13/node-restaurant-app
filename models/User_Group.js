const { Sequelize, DataTypes} = require("sequelize")
const db = require("../database/db")

const User_Group = db.define("user_group",
    {
        user_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER
    },
    {
        timestamps: true
    }
)

module.exports = User_Group;