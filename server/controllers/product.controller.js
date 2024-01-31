const Product = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    if (req.body.img === 'ProductImg') {

        Prduct.findOne({ img: 'ProductImg' })
            .then(product => {
                if (product) {
                    return res.status(400).json({ errors: { img: { message: "There is a Product with same image Already" } }})                
                }
                else {
                    Product.create(req.body)
                        .then(product => res.json(product))
                        .catch(err => res.status(400).json(err))
                }
            })
    }
    else {
       
        Product.create(req.body)
    
        .then(product => res.json(product))

 
        .catch(err => res.status(400).json(err)) 
    }
}

module.exports.displayAll = (req, res) => {
    Product.find({}).sort({name:'asc'})
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

module.exports.displayOne = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}


module.exports.editProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            product.name = req.body.name || product.name;
            product.img = req.body.img || product.img;
            product.price = req.body.price || product.price;
            product.description = req.body.description || product.description;
   

            return product.save();
        })
        .then(updatedProduct => {
            res.json(updatedProduct);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};
function normalizeError(err, req, res, next) {
    res.status(err.status || 500).json({
      error: {
        code: err.code || 'INTERNAL_SERVER_ERROR',
        message: err.message || 'Internal Server Error',
        details: err.details || null
      }
    });
  }
  

  
