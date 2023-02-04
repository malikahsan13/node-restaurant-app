const {Sequelize, DataTypes} = require("sequelize")
const db = require("../database/db")

const GroupModel = db.define("group",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING
        }
    },{
        timestamps: true
    }
)
db.sync();
module.exports = GroupModel;