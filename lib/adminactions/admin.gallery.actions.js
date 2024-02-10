"use server";

import Gallery from "../models/gallery.model";
import authMiddleware from "../middleware/authMiddleware";
import { dbConnect } from "../mongoose";

export async function addimage(formData, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      const { imageURL, imageLocation, imgDescription } = formData;

      // Validate the required fields
      if (!imageURL) {
        return res.status(400).json({ error: "Image URL is required." });
      }

      const newImage = new Gallery({
        imageURL,
        imageLocation,
        imgDescription,
      });

      const imagesaved = await newImage.save();
      if (imagesaved) {
        return true;
      } else {
        return false;
      }
    } else {
      console.error("Unauthorized access.");
      return false;
    }
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
export async function deleteImage(imageId, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Find the image by ID and delete it
      const deletedImage = await Gallery.findByIdAndDelete(imageId);
      if (deletedImage) {
        return true; // Image deleted successfully
      } else {
        return false; // Image not found or deletion failed
      }
    } else {
      console.error("Unauthorized access.");
      return false; // Unauthorized access
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    return false; // Error occurred during deletion
  }
}
