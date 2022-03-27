const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "cars" },
    bookedTimeSlots: { from: { type: String }, to: { type: String } },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionID: { type: String },
    driver: { type: Boolean },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
