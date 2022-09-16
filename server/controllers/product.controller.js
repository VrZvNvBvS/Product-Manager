const Product = require('../models/product.model');

// display all
module.exports.showAllProducts = (req, res)=> {
    Product.find()
        .then(foundProducts => res.json({data: foundProducts}))
        .catch(err => res.json({message: 'Error: Display all attempt', error: err}));
}

// create
module.exports.createOneProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({data: newProduct}))
        .catch(err => res.json({message: 'Error: Create attempt', error: err}));
}

// retrieve
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(foundProduct => res.json({data: foundProduct}))
        .catch(err => res.json({message: 'Error: get one attempt', error: err}));
}

// update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedProduct => res.json({data: updatedProduct}))
        .catch(err => res.json({message: 'Error: update attempt', error: err}));
}

// delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({data: deletedProduct}))
        .catch(err => res.json({message: 'Error: delete attempt', error: err}));
}