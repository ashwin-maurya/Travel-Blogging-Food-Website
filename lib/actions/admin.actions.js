"use server";
import bcrypt from "bcryptjs";
import { dbConnect } from "../mongoose";
import Admin from "../models/admin.model";
import generateAuthToken from "../utils/generateAuthToken";
import authMiddleware from "../middleware/authMiddleware";
export async function adminLogin(phoneNumber, password) {
  await dbConnect();

  try {
    // Check if admin with the given phone number exists
    let admin = await Admin.findOne({ phoneNumber, isAdmin: true });

    if (!admin) {
      return {
        success: false,
        error: "Invalid credentials. Please check your credentials",
      };
    }

    // Compare the provided password with the hashed password
    const passwordCompare = await bcrypt.compare(password, admin.password);

    if (!passwordCompare) {
      return {
        success: false,
        error: "Invalid credentials. Please check your credentials",
      };
    }

    // Generate JWT token
    const authtoken = generateAuthToken(admin.id, true);

    return { success: true, authtoken };
  } catch (error) {
    console.error(error.message);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function adminSignup(phoneNumber, password) {
  await dbConnect();

  try {
    // Check if admin with the given phone number already exists
    let admin = await Admin.findOne({ phoneNumber, isAdmin: true });

    if (admin) {
      return {
        success: false,
        error: "Admin with this phone number already exists",
      };
    }

    // Hash the password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin Admin
    admin = new Admin({
      phoneNumber,
      password: hashedPassword,
      isAdmin: true,
    });

    await admin.save();

    // Generate JWT token
    const authtoken = generateAuthToken(admin.id, true);

    return { success: true, authtoken };
  } catch (error) {
    console.error(error.message);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function tokenValidation(authtoken) {
  await dbConnect();
  try {
    // Verify JWT token
    const decoded = authMiddleware(authtoken);
    if (decoded.isAdmin && decoded.id != "") {
      return { success: true, admin: decoded.isAdmin };
    } else {
      return {
        success: false,
        error: "Invalid authtoken from tokenValdiation",
      };
    }
  } catch (error) {
    console.error(error.message);
    return { success: false, error: "Internal Server Error" };
  }
}
