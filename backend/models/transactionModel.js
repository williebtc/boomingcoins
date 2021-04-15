const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    withdrawal: {
      type: Number,
      required: true,
    },
    isWithdrawalPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    withdrawalDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const TransactionModel = mongoose.model("Transaction", transactionSchema)
module.exports = TransactionModel
