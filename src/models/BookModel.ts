import { DataTypes, Model, Optional } from "sequelize";

export type BookAttributes = {
  id: number;
  name: string;
  author: number;
};

export type BookCreationAttributes = Optional<BookAttributes, "id">;

export class Book extends Model<BookAttributes, BookCreationAttributes> {
  declare name: string;
  declare author: number;
}

export const bookModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.INTEGER,
  },
};
