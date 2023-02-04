const express = require("express");
const {getGroups, getGroup, addGroup, updateGroup, deleteGroup} = require("../controllers/GroupController")
const router = express.Router();

router.use((req, res, next)=>{
    console.log("Group Middleware")
    next()
})

router.get("/", getGroups)
router.get("/:id", getGroup)
router.post("/add", addGroup)
router.put("/:id", updateGroup)
router.delete("/:id", deleteGroup)

module.exports = router;