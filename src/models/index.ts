import { Sequelize } from "sequelize";
import { UserModel, userModelAttributes } from "./UserModel";

export const initModels = (sequelize: Sequelize) => {
  UserModel.init(userModelAttributes, { sequelize }).sync();
};
