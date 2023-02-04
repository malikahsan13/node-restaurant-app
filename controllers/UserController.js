const UserModel = require("../models/User")
const User_Group = require("../models/User_Group")
const Group_Privilege = require("../models/Group_Privilege")
const jwt = require("jsonwebtoken")
const config = require("../config")

const SECRET_KEY = config.KEY_CONFIG.SECRET_KEY;

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

const loginUser = (req, res) => {
    let user_data = {};
    UserModel.findOne({where: {email: req.body.email}})
    .then((user) => 
    {
        if(user.length !== 0)
        {
            user_data.name = user.email;
            //if(user.password === 123)
            //{
                //console.log("Here1")
                User_Group.findOne({where: {user_id: user.id}})
                .then((group)=>{
                    if(group.length !== 0)
                    {
                        //console.log("Here2")
                        user_data.group_id = group.group_id;
                        Group_Privilege.findOne({where: {group_id: group.group_id}})
                        .then((privilege) => 
                        {
                            if(privilege.length !== 0)
                            //console.log("Here3")
                            {
                                user_data.privilege_id = privilege.privilege_id;
                                //res.send(user_data);
                                const token = jwt.sign({user_data},SECRET_KEY,{expiresIn: '500s'})
                                res.json({"Auth-Token" : token})
                            }
                        }
                        )
                        .catch((err) => res.send("Privilege Error"))
                    }
                })
                .catch((err)=>{res.send("User Group Error")})
            //}
        }
    } 
    )
    .catch((err) => {res.send("User Not Found")});
}

module.exports = { userRegister, getUsers, getUser, updateUser, deletUser, loginUser };