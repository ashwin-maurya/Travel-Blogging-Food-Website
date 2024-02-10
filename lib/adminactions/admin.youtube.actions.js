"use server";

import authMiddleware from "../middleware/authMiddleware";
import Youtube from "../models/youtube.models";
import { dbConnect } from "../mongoose";

export async function addVideo(formData, authToken) {
  await dbConnect();

  try {
    const { youtubeId, title } = formData;

    // Verify user authentication
    const decoded = authMiddleware(authToken);
    if (!decoded) {
      console.error("Unauthorized access.");
      return false;
    }

    // Create and save the new video
    const newVideo = new Youtube({ title, youtubeId });
    const savedVideo = await newVideo.save();

    if (savedVideo) {
      console.log("Video added successfully:", savedVideo);
      return true;
    } else {
      console.error("Failed to save video.");
      return false;
    }
  } catch (error) {
    console.error("Error adding video:", error);
    return false;
  }
}
export async function deleteVideo(youtubeId, authToken) {
  await dbConnect();

  try {
    // Verify user authentication
    const decoded = authMiddleware(authToken);
    if (!decoded) {
      console.error("Unauthorized access.");
      return false;
    }

    // Find the video by ID and delete it
    const deletedVideo = await Youtube.findByIdAndDelete(youtubeId);
    if (deletedVideo) {
      console.log("Video deleted successfully:", deletedVideo);
      return true;
    } else {
      console.error("Failed to delete video.");
      return false;
    }
  } catch (error) {
    console.error("Error deleting video:", error);
    return false;
  }
}
