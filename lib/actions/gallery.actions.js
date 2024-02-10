"use server";

import Gallery from "../models/gallery.model";

import { dbConnect } from "../mongoose";

export async function fetchgallery() {
  await dbConnect();

  try {
    const gallery = await Gallery.find({})
      .select("imageURL imageLocation imgDescription date")
      .lean() // Use the lean() method to convert the mongoose document to a plain JavaScript object
      .exec();
    if (!gallery) {
      return false;
    }
    return JSON.parse(JSON.stringify(gallery));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
