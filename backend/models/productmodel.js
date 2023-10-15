import mongoose from "mongoose";
const ProductScema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please Enter Your Name:'],
    },
    description: {
        type: String,
        require: [true, 'Please Enter Your Discription:'],
    },
    price: {
        type: Number,
        require: [true, 'Please Enter Your Price:'],
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },
        },
    ],

    category: {
        type: String,
        require: [true, 'Please Enter catagory'],
        enum: {
            values: [
                "Electronomics",
                "Cameras",
                "Laptop",
                "Headphone",
                "Accesouries",
                "Sports",
            ],
            message: "Please Select Correct Category",
        },
    },
    seller: {
        type: String,
        require: [true, 'Please Enter Your Discription:'],
    },
    stock: {
        type: Number,
        require: [true, 'Please Enter Your Price:'],
    },
    ratings: {
        type: Number,
        default: 0
    },

    reviews: [
        {
            rating:{
            type: Number,
            require: true,
            },
            Comment: {
                type: String,
                require:[true,"Please Enter Comments"],
            },
            createdAt: {
                type: Date,
                require:Date.now,
            },
        },
        
    ],
     createdAt: {
                type: Date,
                require:Date.now,
            },
});

const productModel = mongoose.model('Products', ProductScema);
module.export = productModel;