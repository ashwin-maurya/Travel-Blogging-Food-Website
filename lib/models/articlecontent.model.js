const mongoose = require("mongoose");

const ArticleContentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
});

const ArticleContent =
  mongoose.models.ArticleContent ||
  mongoose.model("ArticleContent", ArticleContentSchema);

export default ArticleContent;
