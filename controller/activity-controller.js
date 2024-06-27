import { Activity } from "../entity/index.js";

export default [
  {
    method: "GET",
    path: "/activity",
    /**
     * Handler for fetching all activities.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the activities or an error
     */
    handler: async (request, h) => {
      try {
        const activities = await Activity.findAll({ populate: ["rivers"] });
        return h.response(activities).code(200);
      } catch (error) {
        console.error("Error fetching activities:", error);
        return h.response({ error: "Unable to fetch activities" }).code(500);
      }
    },
  },
  {
    method: "POST",
    path: "/activity",
    /**
     * Handler for adding an activity.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the activity or an error
     */
    handler: async (request, h) => {
      try {
        const activity = Activity.build(request.payload)
        await activity.save()
        return h.response(activity).code(200);
      } catch (error) {
        console.error("Error fetching activity:", error);
        return h.response({ error: "Unable to fetch activity" }).code(500);
      }
    },
  },
];