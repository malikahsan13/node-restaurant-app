const Product_Model = require("../models/Product")

const addProduct = (req, res) => {
    Product_Model.create(req.body)
    .then((product) => res.send(product))
    .catch((err) => res.send(`Error Adding Product ${err}`))
}

const updateProduct = (req, res) => {
    Product_Model.update({where: {id: req.params.id}}, req.body)
    .then(() => 
        Product_Model.findOne({where: {id: req.params.id}})
        .then((product) => res.send(product))
        .catch((err) => res.send(`Error Getting Product ${err}`))
    )
    .catch((err) => res.send(`Error Updating Product ${err}`))
}

const deleteProduct = (req, res) => {
    Product_Model.destroy({where: {id: req.params.id}})
    .then(() => res.send(`Product Deleted Successfully`))
    .catch((err) => res.send(`Error Deleting Product ${err}`))
}

const getProduct = (req, res) => {
    Product_Model.findOne({where: {id: req.params.id}})
    .then((product) => res.send(product))
    .catch((err) => res.send(`Error Getting Product ${err}`))
}

const getProducts = (req, res) => {
    Product_Model.findAll()
    .then((products) => res.send(products))
    .catch((err) => res.send(`Error Getting Products ${err}`))
}

module.exports = {getProducts, getProduct, addProduct, updateProduct, deleteProduct}