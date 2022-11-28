import { start } from "..";
import { UserModel } from "../UserModel";

export const seed = async () => {
  await start();
  UserModel.create({ firstName: "Jane", lastName: "Jackson" });
};

seed();
