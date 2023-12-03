const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        }
},{
    versionKey: false
});

const Products = mongoose.model('Products' , productSchema);

module.exports = Products;
