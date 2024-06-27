import Hapi from "@hapi/hapi";
import { sequelize } from "./config/db.js";

import Controllers from "./controller/index.js";

export default async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  server.route(Controllers);

  await server.start();
  console.log("Server running on %s", server.info.uri);

  process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
  });

  return server
};



