const mongoose = require("mongoose");

const YoutubeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  youtubeId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
YoutubeSchema.index({ title: "text", youtubeId: "text" });

const Youtube =
  mongoose.models.Youtube || mongoose.model("Youtube", YoutubeSchema);

export default Youtube;
