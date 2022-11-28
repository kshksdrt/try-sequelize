import { start } from "..";
import { UserModel } from "../models";

(async () => {
  await start();
  const newLocal = await UserModel.findAll();
  console.log(newLocal.map((n) => n.toJSON()));
})();
