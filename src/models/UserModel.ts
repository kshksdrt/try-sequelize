import { DataTypes, Model, Optional } from "sequelize";

export type UserAttributes = {
  id: number;
  firstName: string;
  lastName: string;
};

export type UserCreationAttributes = Optional<UserAttributes, "id">;

export class UserModel extends Model<UserAttributes, UserCreationAttributes> {
  declare firstName: string;
  declare lastName: string;
}

export const userModelAttributes = {
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
};
