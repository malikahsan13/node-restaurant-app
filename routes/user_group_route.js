const express = require("express")
const { getUserGroups, addUserGroup, getUserGroup } = require("../controllers/UserGroupController")
const router = express.Router()

router.use((req, res, next) => {
    console.log("User Group Middleware")
    next()
})

router.get("/", getUserGroups)
router.post("/add", addUserGroup)
router.get("/getuser", getUserGroup)

module.exports = router;