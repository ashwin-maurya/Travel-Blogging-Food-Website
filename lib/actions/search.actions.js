"use server";
import Articles from "../models/article.model";
import Destinations from "../models/destinations.model";
import { dbConnect } from "../mongoose";

export async function searcheverything(searchText) {
  await dbConnect();

  try {
    if (searchText.length < 1) {
      return res
        .status(400)
        .json({ error: "Search text should be at least 3 characters long" });
    }

    // Create a case-insensitive regular expression for partial matching
    const regex = new RegExp(searchText, "i");

    const articles = await Articles.find({ title: { $regex: regex } });

    // Search for destinations with partial match
    const destinations = await Destinations.find({
      location: { $regex: regex },
    });

    const results = {
      articles,
      destinations,
    };
    if (!results) {
      return false;
    }
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
