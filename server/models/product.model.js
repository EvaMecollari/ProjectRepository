const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "*title is required"],
        minlength: [2, "title must be longer than 2 characters"],
       
    },
    img: {
        type: String,
        required: [true, "*Image is required"],
    },
    price: {
        type: Number,
        required: [true, "*Value must be  between 1-10"],
        minlength: [1, 'Value must be at least 1'],
        minlength: [0, 'Value must be at most 10'],
    },
    description: {
        type: String,
        required: [true, "body is required is required"],
        minlength: [50, 'body must contain 5 charachter']
    },
    
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)