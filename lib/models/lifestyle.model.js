const mongoose = require("mongoose");

const LifestyleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  lifestyleContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LifestyleContent",
  },
});
LifestyleSchema.index({ title: "text", lifestyleContent: "text" });

const Lifestyle =
  mongoose.models.Lifestyle || mongoose.model("Lifestyle", LifestyleSchema);

export default Lifestyle;
