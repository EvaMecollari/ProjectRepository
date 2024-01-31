const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/display/', ProductController.displayAll)
    app.get('/api/product/:id/', ProductController.displayOne)
    app.post('/api/display/', ProductController.createProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
    app.patch('/api/display/:id', ProductController.editProduct);
}