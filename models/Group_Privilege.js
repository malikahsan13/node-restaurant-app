const {Sequelize, DataTypes} = require("sequelize")
const db = require("../database/db")

const Group_Privilege = db.define("group_privilege",
    {
        group_id: DataTypes.INTEGER,
        privilege_id: DataTypes.INTEGER
    },
    {
        timestamps: true
    }
)

module.exports = Group_Privilege;