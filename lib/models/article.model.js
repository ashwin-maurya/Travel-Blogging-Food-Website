const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  articleContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ArticleContent",
  },
});
ArticlesSchema.index({ title: "text", articleContent: "text" });

const Articles =
  mongoose.models.Articles || mongoose.model("Articles", ArticlesSchema);

export default Articles;
