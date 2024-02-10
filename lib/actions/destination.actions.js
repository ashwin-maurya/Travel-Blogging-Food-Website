"use server";

import Destinations from "../models/destinations.model";

import { dbConnect } from "../mongoose";

export async function fetchdestinations() {
  await dbConnect();

  try {
    const destinations = await Destinations.find({})
      .sort({ content: -1 })
      .select("location imageURL content")
      .lean() // Use the lean() method to convert the mongoose document to a plain JavaScript object
      .exec();
    if (!destinations) {
      return false;
    }
    return JSON.parse(JSON.stringify(destinations));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
