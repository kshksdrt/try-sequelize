import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  port: 33061,
  username: "root",
  password: "root",
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
