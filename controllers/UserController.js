const UserModel = require("../models/User")

const userRegister = (req, res) => {
    // UserModel.create({
    //     firstName: "Jhon2",
    //     lastName: "Kyle2",
    //     email: "jk2@mail.com",
    //     password: "123",
    //     phone: "132513"
    // }).then(() => {res.send("User Registered")})
    // .catch((error)=>{res.send("Error while inserting record"+error)})
    UserModel.create(req.body).then(() => {res.send("User Registered")})
    .catch((error)=>{res.send("Error while inserting record"+error)})
}

const getUsers = (req, res) => {
    UserModel.findAll()
    .then((users) => { res.send(users) })
    .catch((err) => res.send(`Error While Fetching Users ${err}`))
}

const getUser = (req, res) => {
    UserModel.findOne({id: req.params.id})
    .then((user) => { res.send(user) })
    .catch((err)=>{res.send(`Error While Fetching User ${err}`)})
}

const updateUser = (req, res) => {
    UserModel.update(req.body, {where: { id: req.params.id}})
    .then((user) => {
        UserModel.findOne({id: req.params.id})
        .then((user) => res.send(user))
        .catch((err) => res.send(`Error While Fetching User ${err}`))
    })
    .catch((err) => { res.send(`User Not updated ${err}`)})
}

const deletUser = (req, res) => {
    UserModel.destroy({where: {id: req.params.id}})
    .then((user) => { res.send(`User Deleted Successfully`)})
    .catch((err) => { res.send(`Error Deleting User`) })
}

module.exports = { userRegister, getUsers, getUser, updateUser, deletUser };