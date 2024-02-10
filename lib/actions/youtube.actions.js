"use server";

import Youtube from "../models/youtube.models";

import { dbConnect } from "../mongoose";

export async function fetchvideos() {
  await dbConnect();

  try {
    const youtube = await Youtube.find({})
      .select("title youtubeId date")
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
