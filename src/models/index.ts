import { Sequelize } from "sequelize";
import { Book, bookModelAttributes } from "./BookModel.js";
import { User, userModelAttributes } from "./UserModel.js";

export const initModels = (sequelize: Sequelize) => {
  User.init(userModelAttributes, { sequelize }).sync();
  Book.init(bookModelAttributes, { sequelize }).sync();
  User.hasMany(Book, { foreignKey: "author" });
  Book.belongsTo(User);
};
