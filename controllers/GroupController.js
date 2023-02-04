const GroupModel = require("../models/Group")

const getGroups = (req, res) => {
    GroupModel.findAll()
    .then((groups) => { res.send(groups) })
    .catch((err) => { res.send(`Error While getting Groups ${err}`)})
}

const getGroup = (req, res) => {
    GroupModel.findOne({where: {id: req.params.id}})
    .then((group) => res.send(group))
    .catch((err) => {`Error getting Group ${err}`})
}

const addGroup = (req, res) => {
    GroupModel.create(req.body)
    .then((group) => { res.send(group) })
    .catch((err) => { res.send(`Error Adding Group ${err}`) })
}

const updateGroup = (req, res) => {
    GroupModel.update(req.body, {where: {id: req.params.id}})
    .then((group) => {
        GroupModel.findOne({where: {id: req.params.id}})
        .then((group) => res.send(group))
        .catch((err) => res.send(`Error getting updated Group ${err}`))
    })
    .catch((err) => { res.send(`Error Updating Group ${err}`) })
}

const deleteGroup = (req, res) => {
    GroupModel.destroy({where: {id: req.params.id}})
    .then(() => {res.send(`Group Updated Successfully`)})
    .catch((err) => { res.send(`Error Deleting Group ${err}`)})
}


module.exports = {getGroups, getGroup, addGroup, updateGroup, deleteGroup}