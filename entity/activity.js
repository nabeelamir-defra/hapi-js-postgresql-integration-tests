import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

class Activity extends Model { }
Activity.init(
  {
    createdAt: {
      type: DataTypes.DATE,
      field: "created",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "last_modified",
    },
    daysFishedOther: {
      type: DataTypes.INTEGER,
    },
    daysFishedWithMandatoryRelease: {
      type: DataTypes.INTEGER,
    },
    version: {
      type: DataTypes.DATE,
    }
  },
  { sequelize, modelName: "Activity", tableName: "rcr_activity", underscored: true }
);

export default Activity;
