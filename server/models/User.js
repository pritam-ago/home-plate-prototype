import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
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
    enum: ['male', 'female', 'other'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  orderHistory: [
    {
      orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders',
      },
      orderDate: {
        type: Date
      },
    },
  ],
});

const User = mongoose.model('User', userSchema);
export default User;