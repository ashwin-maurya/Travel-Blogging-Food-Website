"use server";

import Lifestyle from "../models/lifestyle.model";
import { dbConnect } from "../mongoose";
import LifestyleContent from "../models/lifestylecontent.model";
export async function fetchlifestyle() {
  await dbConnect();

  try {
    const lifestyle = await Lifestyle.find({}, { lifestyleContent: 0 }).exec();
    if (!lifestyle) {
      return false;
    }
    return JSON.parse(JSON.stringify(lifestyle));
  } catch (error) {
    console.error("Error fecthing lifestyle1:", error);
    return false;
  }
}

export async function fetchlifestylewithcontent(lifestyleId) {
  await dbConnect();

  try {
    const lifestyle = await Lifestyle.findOne({ _id: lifestyleId })
      .populate("lifestyleContent")
      .exec();
    console.log(lifestyle);
    if (!lifestyle) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(lifestyle));
  } catch (error) {
    console.error("Error fecthing lifestyl  e:", error);
    return false;
  }
}
