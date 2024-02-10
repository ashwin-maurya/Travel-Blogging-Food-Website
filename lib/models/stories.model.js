const mongoose = require("mongoose");

// Define a schema for the story content group
const StoryContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  header: {
    type: Object,
    default: {
      title: "mumbai",
      desc: "mumbai is a city of dreams",
    },
  },
});

// Define a schema for the stories
const StorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  storycontent: [StoryContentSchema], // Reference the StoryContent schema for the story content
});

const Story = mongoose.models.Story || mongoose.model("Story", StorySchema);

export default Story;
