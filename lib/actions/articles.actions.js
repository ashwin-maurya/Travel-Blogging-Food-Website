"use server";

import ArticleContent from "../models/articlecontent.model";
import Articles from "../models/article.model";

import { dbConnect } from "../mongoose";

export async function fetcharticles(page) {
  // Assuming dbConnect is defined elsewhere
  await dbConnect();

  try {
    const pageSize = 2; // Number of articles to fetch per page
    const skip = (page - 1) * pageSize;

    // Simulate delay
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const articles = await Articles.find({}, { articleContent: 0 }) // Exclude articleContent
      .skip(skip)
      .limit(pageSize)
      .exec();
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function fetcharticlesbylocation(location) {
  await dbConnect();

  try {
    const articles = await Articles.find(
      { location: { $regex: new RegExp(location, "i") } },
      { articleContent: 0 }
    );
    if (!articles) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}

export async function fetcharticleswithcontent(articleId) {
  await dbConnect();

  try {
    const articles = await Articles.findOne({ _id: articleId })
      .populate("articleContent")
      .exec();

    if (!articles) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
