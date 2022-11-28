import { start } from "..";
import { UserModel } from "../models";

export const seed = async () => {
  await start();
  UserModel.create({ firstName: "Jane", lastName: "Jackson" });
};

seed();
