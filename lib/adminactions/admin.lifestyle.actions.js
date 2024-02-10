"use server";
import authMiddleware from "../middleware/authMiddleware";
import Lifestyle from "../models/lifestyle.model";
import LifestyleContent from "../models/lifestylecontent.model";

import { dbConnect } from "../mongoose";

export async function addlifestyle(blogContent, authtoken) {
  await dbConnect();

  try {
    const { title, category, imageURL, content } = blogContent;

    const decoded = authMiddleware(authtoken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Create the BlogContent first
      const lifestyleContent = new LifestyleContent({ content });
      const savedlifestyleContent = await lifestyleContent.save();

      // Create the Blog with the reference to BlogContent
      const blog = new Lifestyle({
        title,
        category,
        imageURL,
        lifestyleContent: savedlifestyleContent._id,
      });

      const savedlifestyle = await blog.save();

      // Check if the blog was successfully saved
      if (savedlifestyle) {
        console.log("Blog added successfully:", savedlifestyle);
        return true;
      } else {
        console.error("Failed to save blog.");
        return false;
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

export async function deleteLifestyle(lifestyleId, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Find the lifestyle by ID and delete it
      const deletedLifestyle = await Lifestyle.findByIdAndDelete(lifestyleId);
      await LifestyleContent.findByIdAndDelete(
        deletedLifestyle.lifestyleContent
      );

      if (deletedLifestyle) {
        return true; // Lifestyle deleted successfully
      } else {
        return false; // Lifestyle not found or deletion failed
      }
    } else {
      console.error("Unauthorized access.");
      return false; // Unauthorized access
    }
  } catch (error) {
    console.error("Error deleting lifestyle:", error);
    return false; // Error occurred during deletion
  }
}
