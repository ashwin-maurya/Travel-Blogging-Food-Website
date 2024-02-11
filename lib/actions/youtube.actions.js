"use server";

import Youtube from "../models/youtube.models";

import { dbConnect } from "../mongoose";

export async function fetchvideos(page) {
  await dbConnect();
  const perPage = 1; // Number of images per page
  const skip = (page - 1) * perPage; // Calculate the number of documents to skip

  try {
    const youtube = await Youtube.find({})
      .select("title youtubeId date")
      .skip(skip) // Skip documents based on the page number
      .limit(perPage) // Limit the number of documents returned per page
      .lean()
      .exec();
    if (!youtube) {
      return false;
    }
    return JSON.parse(JSON.stringify(youtube));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
