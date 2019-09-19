const config = require('config');

const ProductModel = require('./../models/product.model');

const insert = (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let brand = req.body.brand;
    let material = req.body.material;
    let description = req.body.description;
    if (name && price) {
        ProductModel.insert(name, price, brand, material, description).then(data => {
            res.json({
                status: config.get('SUCCESS_STATUS'),
            })
        })
    } else {
        res.json({
            status: config.get('ERROR_STATUS'),
            message: 'Name and Price are requirred'
        })
    }
}

const getListProduction = (req, res) => {    
    ProductModel.getListProduction().then(list => {
        res.json({
            status: config.get('SUCCESS_STATUS'),
            data: list
        })
    })
}

module.exports = {
    insert,
    getListProduction
}