const express = require("express")
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require("../controllers/ProductController")
const User_Group = require("../models/User_Group")
const Group_Privilege = require("../models/Group_Privilege")
const jwt = require("jsonwebtoken")
const config = require("../config")
const router = express.Router()

const SECRET_KEY = config.KEY_CONFIG.SECRET_KEY;


const middlewareProduct = //() => 
    // {
        // router.use(
            (req, res, next) => {
        console.log("Product Middleware")
        try{
            const {user_data} = jwt.verify(req.headers.authorization, SECRET_KEY)
            // console.log(user_data);
            User_Group.findOne({where: {group_id: user_data.group_id}})   // get group id from session/jwt token
            .then((user) => 
                {
                    if(user.length!==0)
                    {
                        Group_Privilege.findOne({where: {group_id: user_data.group_id, privilege_id: user_data.privilege_id}}) //get id's from session/jwt token
                        .then((group) => { if(group.length!==0) next() })
                        .catch((err) => res.send("You Dont Have Privilege Please Contact Admin"))
                    }
                }
            )
            .catch((err) => res.send("You Dont Have Group, Privilege Please Contact Admin") )
            //next()
        }
        catch(err){
            res.send(`Token is Expired ${err}`)
        }
    // })
}

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/add",middlewareProduct, addProduct)
router.put("/:id",middlewareProduct, updateProduct)
router.delete("/:id",middlewareProduct, deleteProduct)

module.exports = router;