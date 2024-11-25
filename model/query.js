const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
    approved: { type: Boolean, default: false },
    // adding models for storing ANSWER and USER_ID
    answer: String,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", querySchema);

module.exports = Query;
