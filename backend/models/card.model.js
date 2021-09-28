const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    course: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    registrationlink: { type: String, required: true },
    time: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Cards", cardSchema);

module.exports = Card;
