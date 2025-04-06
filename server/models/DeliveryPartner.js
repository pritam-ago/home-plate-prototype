import mongoose from 'mongoose';

const deliveryPartnerSchema = new mongoose.Schema({
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
        required: true
    },
    availablity: {
        type: Boolean,
        default: true,
    }
});

const DeliverPartner = mongoose.model('DeliverPartner', deliveryPartnerSchema);
export default DeliverPartner;