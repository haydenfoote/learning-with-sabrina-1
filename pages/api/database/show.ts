import connectMongo from "../utils/connectdb";
import User from "./models_post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function showUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json(`Something went wrong! Error: ${error}`);
  }
}
