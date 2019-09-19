const ObjectID = require('mongodb').ObjectID;

const connection = require('./connection');

const insert = (name, price, brand, material, description) => {
    return new Promise((resolve, reject) => {
        connection(db => {
            db.collection('products').insert({
                name: name,
                price: price,
                brand: brand,
                material: material,
                description: description
            }, (err, data) => {
                db.close();
                if (err) {                    
                    resolve(false);
                } else {
                    resolve(true);
                }
            })
        })
    })
}

const getListProduction = () => {
    return new Promise((resolve, reject) => {
        connection(db => {
            db.collection('products').find().toArray((err, list) => {
                db.close();
                if (err) {                    
                    resolve(false);
                } else {
                    resolve(list);
                }
            })
        })
    })
}

module.exports = {
    insert,
    getListProduction
}