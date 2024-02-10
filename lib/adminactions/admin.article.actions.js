"use server";

import authMiddleware from "../middleware/authMiddleware";
import Articles from "../models/article.model";
import ArticleContent from "../models/articlecontent.model";
import Destinations from "../models/destinations.model";

import { dbConnect } from "../mongoose";

export async function addarticleAdmin(articleContent, authtoken) {
  await dbConnect();

  try {
    const { title, category, location, imageURL, content } = articleContent;

    const decoded = authMiddleware(authtoken);
    if (decoded.isAdmin && decoded.id != "") {
      // Find or create the destination based on the location
      let destination = await Destinations.findOne({ location });

      if (!destination) {
        // If the destination doesn't exist, create a new one
        destination = new Destinations({ location, content: 0 });
      }

      // Increment the content count
      destination.content += 1;
      await destination.save();

      // Assuming you have a separate endpoint for adding blog content
      // Create the BlogContent first
      const articleContent = new ArticleContent({ content });
      const savedArticleContent = await articleContent.save();

      // Create the Blog with the reference to BlogContent
      const articles = new Articles({
        title,
        category,
        location,
        imageURL,
        articleContent: savedArticleContent._id,
      });

      const savedArticles = await articles.save();
      if (savedArticles) {
        console.log("Blog added successfully:", savedArticles);
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

export async function deleteArticle(articleId, location, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Find the article by ID and delete it
      const deletedArticle = await Articles.findByIdAndDelete(articleId);
      if (deletedArticle) {
        await ArticleContent.findByIdAndDelete(deletedArticle.articleContent);

        // Check if the content count of the location is 1
        const destination = await Destinations.findOne({ location });
        if (destination) {
          if (destination.content === 1) {
            // If the content count is 1, delete the destination
            await Destinations.findByIdAndDelete(destination._id);
          } else {
            // If the content count is greater than 1, decrement it by 1 and save
            destination.content -= 1;
            await destination.save();
          }
        }
        return true; // Article deleted successfully
      } else {
        return false; // Article not found or deletion failed
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
