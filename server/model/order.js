const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: String,
      quantity: Number
    }
  ],
  totalAmount: Number,
  isConfirmed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
