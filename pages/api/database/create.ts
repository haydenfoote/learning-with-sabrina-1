import connectMongo from "../utils/connectdb";
import User from "./models_post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const test = await User.create(req.body);
    res.status(200).json("You are authorized");
  } catch (error) {
    console.log(error);
    res.status(400).json(`Something went wrong! error: ${error}`);
  }
}
