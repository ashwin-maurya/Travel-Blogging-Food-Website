// "use server";

import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  location: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  content: {
    type: Number,
  },
});

DestinationSchema.index({ location: "text" });

const Destinations =
  mongoose.models.Destinations ||
  mongoose.model("Destinations", DestinationSchema);

export default Destinations;
