import { start } from "..";
import { Book } from "../models/BookModel.js";
import { User } from "../models/UserModel.js";

const janeCreationAttributes = {
  firstName: "Jane",
  lastName: "Jackson",
};

const bookName = "Book name";

export const seed = async () => {
  await start();
  const user = await User.create(janeCreationAttributes);
  await Book.create({ name: bookName, author: user.toJSON().id });
};

seed();
