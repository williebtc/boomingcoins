const mongoose = require("mongoose")

const referralSchema = mongoose.Schema(
  {
    theReferralUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    referredEmail: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    isReferralPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)

const ReferralModel = mongoose.model("Referral", referralSchema)
module.exports = ReferralModel
