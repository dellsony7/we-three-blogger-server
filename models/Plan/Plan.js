const mongoose = require("mongoose")

const planSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true },
    features: [String],
    price: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Plan", planSchema)
