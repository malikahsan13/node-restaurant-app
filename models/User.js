const {Sequelize, DataTypes} = require("sequelize");
const db = require("../database/db")

const UserModel = db.define("user",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        }
    },{
        timestamps: true
    }
);
// sequelize.sync({ alter: true });
//db.sync();
module.exports = UserModel;