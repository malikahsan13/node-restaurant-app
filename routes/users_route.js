const express = require("express");
const router = express.Router();
const { userRegister, getUsers, getUser, updateUser, deletUser, loginUser} = require("../controllers/UserController")

router.use((req, res, next)=>{
    console.log("Middleware.")
    next()
})

router.post("/register", userRegister)
router.get("/", getUsers)
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deletUser)
router.get("/user/login", loginUser)

module.exports = router;