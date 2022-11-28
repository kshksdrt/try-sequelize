import { start } from "..";
import { Book } from "../models/BookModel.js";
import { User } from "../models/UserModel.js";

(async () => {
  await start();
  const users = await User.findAll();
  const books = await Book.findAll();
  console.log({ users: users.map((n) => n.toJSON()), books });
})();
