const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    // get all
    app.get("/api/products", ProductController.showAllProducts);

    // one on by ID
    app.get("/api/products/:id", ProductController.findOneProduct);

    // create new
    app.post("/api/products", ProductController.createOneProduct);

    // update
    app.put("/api/products/:id", ProductController.updateProduct);

    // delete
    app.delete("/api/products/:id", ProductController.deleteProduct);
};