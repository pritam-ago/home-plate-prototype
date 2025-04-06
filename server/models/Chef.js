import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    address: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menus',
    },
    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
    },
});

const Chef = mongoose.model('Chef', chefSchema);
export default Chef;
