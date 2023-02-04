const express = require("express")
const { getPrivileges, getPrivilege, addPrivilege, updatePrivilege, deletePrivilege  } = require("../controllers/PrivilegeController")
const router = express.Router()

router.use((req, res, next) => {
    console.log("Privilege Middleware")
    next()
})

router.get("/", getPrivileges)
router.get("/:id", getPrivilege)
router.post("/add", addPrivilege)
router.put("/:id", updatePrivilege)
router.delete(":/id", deletePrivilege)

module.exports = router;