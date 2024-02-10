"use server";
import Story from "../models/stories.model";
import { dbConnect } from "../mongoose";
import authMiddleware from "../middleware/authMiddleware";
// Establish a connection to the MongoDB database
export async function addstory(formdata, authToken) {
  await dbConnect();
  // Create a new story document
  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      const newStory = await new Story(formdata);
      console.log(formdata, "formdata");
      // Save the new story document to the database
      const story = await newStory.save();
      if (story) {
        console.log("Blog added successfully:", story);
        return true;
      } else {
        console.error("Failed to save blog.");
        return false;
      }
    } else {
      console.error("Unauthorized access.");
      return false; // Unauthorized access
    }
  } catch (error) {
    console.error("Error deleting article:", error);
    return false; // Error occurred during deletion
  }
}
export async function fetchAllStories() {
  try {
    // Connect to the database
    await dbConnect();
    // await addstory();
    console.log("db connected");
    // Find all stories
    const stories = await Story.find().exec();
    console.log(stories);

    // Return the fetched stories
    return JSON.parse(JSON.stringify(stories));
  } catch (error) {
    console.error("Error fetching stories:", error);
    return false; // Return an empty array if there's an error
  }
}
