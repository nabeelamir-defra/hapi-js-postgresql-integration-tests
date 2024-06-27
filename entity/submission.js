import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

class Submission extends Model { }
Submission.init(
  {
    season: {
      type: DataTypes.INTEGER,
    },
    contactId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.STRING,
    },
    reportingExclude: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "last_modified",
    },
    version: {
      type: DataTypes.DATE,
    }
  },
  { sequelize, modelName: "Submission", tableName: "rcr_submission", underscored: true }
);

export default Submission;
