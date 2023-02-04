const Group_Privilege = require("../models/Group_Privilege")

const getGroupPrivileges = (req, res) => {
    Group_Privilege.findAll()
    .then((grpPrivilege) => { res.send(grpPrivilege) })
    .catch((err) => { res.send(`Error While getting Group Privileges ${err}`)})
}

const getGroupPrivilege = (req, res) => {
    Group_Privilege.findOne({where: {group_id: req.body.group_id, privilege_id: req.body.privilege_id}})
    .then((grpPrivilege) => res.send(grpPrivilege))
    .catch((err) => {`Error getting Group Privilege ${err}`})
}

const addGroupPrivileges = (req, res) => {
    Group_Privilege.create(req.body)
    .then((grpPrivilege) => { res.send(grpPrivilege) })
    .catch((err) => { res.send(`Error Adding Group Privilege ${err}`) })
}


module.exports = {getGroupPrivileges, addGroupPrivileges, getGroupPrivilege}