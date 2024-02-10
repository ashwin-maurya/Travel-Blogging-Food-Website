"use server";

import Destinations from "../models/destinations.model";
import authMiddleware from "../middleware/authMiddleware";
import { dbConnect } from "../mongoose";

export async function updateImageURL(destinationId, imageURL, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      const updatedDestination = await Destinations.findByIdAndUpdate(
        destinationId,
        { imageURL },
        { new: true }
      );
      console.log(updatedDestination);
      if (!updatedDestination) {
        return false;
      } else {
        return true;
      }
    } else {
      console.error("Unauthorized access.");
      return false;
    }
  } catch (error) {
    console.error("Error adding blog:", error);
    return false;
  }
}
