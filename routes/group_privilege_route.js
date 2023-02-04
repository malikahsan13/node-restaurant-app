const express = require("express")
const { getGroupPrivileges, addGroupPrivileges, getGroupPrivilege } = require("../controllers/GroupPrivilegeController")
const router = express.Router()

router.use((req, res, next) => {
    console.log("Group Privilege Middleware")
    next()
})

router.get("/", getGroupPrivileges)
router.post("/add", addGroupPrivileges)
router.get("/getprivilege", getGroupPrivilege)

module.exports = router;