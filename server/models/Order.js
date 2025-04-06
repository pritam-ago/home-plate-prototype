import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    chefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chefs",
        required: true,
    },
    deliverPartnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliverPartners",
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    },
    pickupAddress: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["processing", "ready", "cancelled", "delivered"],
        default: "processing",
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
    totalAmount: {
        type: Number,
        required: true,
    }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;