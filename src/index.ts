import { Sequelize } from "sequelize";
import { initModels } from "./models";

export const connectSequelize = async (): Promise<Sequelize> => {
  const sequelize = new Sequelize({
    host: "localhost",
    dialect: "mysql",
    port: 33061,
    username: "root",
    password: "root",
    database: "library",
  });
  await sequelize.authenticate();
  return sequelize;
};

export const start = async () => {
  try {
    const sequelize = await connectSequelize();
    console.log("Connection has been established successfully.");
    initModels(sequelize);
    console.log("Models have been created.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
