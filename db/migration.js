import { Liquibase } from 'liquibase';
import dotenv from "dotenv";
dotenv.config();

const myConfig = {
  changeLogFile: 'db/changelog/db.changelog-master.xml',
  url: `jdbc:postgresql://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/rcr_api`,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}
const instTs = new Liquibase(myConfig);


if (process.argv[2] === "migrate") {
  instTs.update();
} else if (process.argv[2] === "status") {
  instTs.status();
} else if (process.argv[2] === "drop") {
  instTs.dropAll();
} else {
  console.log("No option selected")
}