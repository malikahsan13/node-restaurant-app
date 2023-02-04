const PrivilegeModel = require("../models/Privilege")

const getPrivileges = (req, res) => {
    PrivilegeModel.findAll()
    .then((privileges) => { res.send(privileges) })
    .catch((err) => { res.send(`Error While getting Privileges ${err}`)})
}

const getPrivilege = (req, res) => {
    PrivilegeModel.findOne({where: {id: req.params.id}})
    .then((privilege) => res.send(privilege))
    .catch((err) => {`Error getting Privilege ${err}`})
}

const addPrivilege = (req, res) => {
    PrivilegeModel.create(req.body)
    .then((privilege) => { res.send(privilege) })
    .catch((err) => { res.send(`Error Adding Privilege ${err}`) })
}

const updatePrivilege = (req, res) => {
    PrivilegeModel.update(req.body, {where: {id: req.params.id}})
    .then((privilege) => {
        PrivilegeModel.findOne({where: {id: req.params.id}})
        .then((privilege) => res.send(privilege))
        .catch((err) => res.send(`Error getting updated Privilege ${err}`))
    })
    .catch((err) => { res.send(`Error Updating Privilege ${err}`) })
}

const deletePrivilege = (req, res) => {
    PrivilegeModel.destroy({where: {id: req.params.id}})
    .then(() => {res.send(`Privilege Updated Successfully`)})
    .catch((err) => { res.send(`Error Deleting Privilege ${err}`)})
}


module.exports = {getPrivileges, getPrivilege, addPrivilege, updatePrivilege, deletePrivilege}