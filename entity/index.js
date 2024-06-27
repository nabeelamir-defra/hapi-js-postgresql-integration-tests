import River from "./river.js";
import Activity from "./activity.js";
import Submission from "./submission.js";

Activity.belongsTo(River, {
  foreignKey: {
    name: "river_id",
  },
});

Activity.belongsTo(Submission, {
  foreignKey: {
    name: "submission_id",
  },
});

export { River, Activity, Submission };