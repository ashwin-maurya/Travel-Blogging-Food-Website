"use server";
import Gallery from "../models/gallery.model";
import { dbConnect } from "../mongoose";
export async function fetchgallery(page = 1) {
  const perPage = 1; // Number of images per page
  const skip = (page - 1) * perPage; // Calculate the number of documents to skip

  await dbConnect();

  try {
    const gallery = await Gallery.find({})
      .select("imageURL imageLocation imgDescription date")
      .skip(skip) // Skip documents based on the page number
      .limit(perPage) // Limit the number of documents returned per page
      .lean()
      .exec();
    if (!gallery) {
      return false;
    }
    return JSON.parse(JSON.stringify(gallery));
  } catch (error) {
    console.error("Error fetching images:", error);
    return false;
  }
}
