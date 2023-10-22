const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  user_id: {
    type: String,//mongoose.Schema.Types.ObjectId,
    ref: 'User', // You might have a User model for authentication
  },
  balance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Wallet", walletSchema);
