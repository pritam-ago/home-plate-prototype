import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    chefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chefs",
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;