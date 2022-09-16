const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "ERROR: Title is required!"]
    },
    price: { 
        type: Number,
        required: [true, "ERROR: Price is required!"]
    },
    description: {
        type: String,
        required: [true, "ERROR: Description is required!"]
    }
});

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;