import { DataTypes, Model, Optional, Sequelize } from "sequelize";

type UserAttributes = {
  id: number;
  firstName: string;
  lastName: string;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

export class UserModel extends Model<UserAttributes, UserCreationAttributes> {
  declare firstName: string;
  declare lastName: string;
}

export const initModels = (sequelize: Sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  ).sync();
};
