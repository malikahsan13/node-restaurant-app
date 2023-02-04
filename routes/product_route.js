const express = require("express")
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require("../controllers/ProductController")
const User_Group = require("../models/User_Group")
const Group_Privilege = require("../models/Group_Privilege")
const router = express.Router()

router.use((req, res, next) => {
    console.log("Product Middleware")
    req.params.id = 2;
    User_Group.findOne({where: {id: 2}})   // get id from session
    .then((user) => 
        {
            if(user.length!==0)
            {
                Group_Privilege.findOne({where: {group_id: 1, privilege_id: 1}}) //get id's from session
                .then((group) => { if(group.length!==0) next() })
                .catch((err) => res.send("You Dont Have Privilege Please Contact Admin"))
            }
        }
    )
    .catch((err) => res.send("You Dont Have Group, Privilege Please Contact Admin") )
    //next()
})

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/add", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;