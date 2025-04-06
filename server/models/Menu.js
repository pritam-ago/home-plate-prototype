import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    chefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chef",
        required: true,
    },
    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Inventory",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;