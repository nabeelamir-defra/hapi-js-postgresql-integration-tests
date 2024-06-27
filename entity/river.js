import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

class River extends Model { }
River.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "last_modified",
    },
  },
  { sequelize, modelName: "River", tableName: "rcr_river", underscored: true }
);

export default River;
