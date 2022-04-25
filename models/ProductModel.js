import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            uppercase: true
        },
        type: {
            type: String,
            required: true,
            uppercase: true
        },
        price: {
            type: Number,
            required: true,
            uppercase: true
        },
        image: {
            type: String,
            required: true,
            uppercase: true
        },
    },
    {
        collection: 'products',
        timestamps: true
    }
);

const ProductModel = model('product', ProductSchema);

export default ProductModel;