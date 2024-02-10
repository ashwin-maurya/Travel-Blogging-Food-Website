const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
    // Example: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1000"
  },
  imageLocation: {
    type: String,
    // Example: "Kolkata"
  },
  imgDescription: {
    type: String,
    // Example: "A train ride from Kolkata to Howrah Bridge"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);

export default Gallery;
