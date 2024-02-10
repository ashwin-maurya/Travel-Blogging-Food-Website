"use server";
import Story from "../models/stories.model";
import { dbConnect } from "../mongoose";

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
