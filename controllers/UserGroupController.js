const User_Group = require("../models/User_Group")

const getUserGroups = (req, res) => {
    User_Group.findAll()
    .then((usrPrivilege) => { res.send(usrPrivilege) })
    .catch((err) => { res.send(`Error While getting Group Privileges ${err}`)})
}

const getUserGroup = (req, res) => {
    User_Group.findOne({where: {group_id: req.body.group_id, user_id: req.body.user_id}})
    .then((usrPrivilege) => res.send(usrPrivilege))
    .catch((err) => {`Error getting Group Privilege ${err}`})
}

const addUserGroup = (req, res) => {
    User_Group.create(req.body)
    .then((usrPrivilege) => { res.send(usrPrivilege) })
    .catch((err) => { res.send(`Error Adding Group Privilege ${err}`) })
}


module.exports = {getUserGroups, addUserGroup, getUserGroup}