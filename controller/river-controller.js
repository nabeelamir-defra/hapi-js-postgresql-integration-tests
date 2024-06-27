import { River } from "../entity/index.js";

export default [
  {
    method: "GET",
    path: "/river",
    /**
     * Handler for fetching all rivers.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the rivers or an error
     */
    handler: async (request, h) => {
      try {
        const rivers = await River.findAll();
        return h.response(rivers).code(200);
      } catch (error) {
        console.error("Error fetching rivers:", error);
        return h.response({ error: "Unable to fetch rivers" }).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/river/{id}",
    /**
    * Handler for fetching all rivers.
    *
    * @param {import('@hapi/hapi').Request request - The Hapi request object
    * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the river or an error
    */
    handler: async (request, h) => {
      try {
        const river = await River.findByPk(request.params.id);
        if (river !== null) {
          river.name;
        }
        return h.response(river).code(200);
      } catch (error) {
        console.error("Error fetching river:", error);
        return h.response({ error: "Unable to fetch river" }).code(500);
      }
    },
  },
];