const mongoose = require("mongoose");

const LifestyleContentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
});

const LifestyleContent =
  mongoose.models.LifestyleContent ||
  mongoose.model("LifestyleContent", LifestyleContentSchema);

export default LifestyleContent;
