import { Submission } from "../entity/index.js";

export default [
  {
    method: "GET",
    path: "/submission",
    /**
     * Handler for fetching all submissions.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the submissions or an error
     */
    handler: async (request, h) => {
      try {
        const submissions = await Submission.findAll();
        return h.response(submissions).code(200);
      } catch (error) {
        console.error("Error fetching submissions:", error);
        return h.response({ error: "Unable to fetch submissions" }).code(500);
      }
    },
  },
  {
    method: "POST",
    path: "/submission",
    /**
     * Handler for adding a submission.
     *
     * @param {import('@hapi/hapi').Request request - The Hapi request object
     * @param {import('@hapi/hapi').ResponseToolkit} h - The Hapi response toolkit
    * @returns {import('@hapi/hapi').ResponseObject} - A response containing the submission or an error
     */
    handler: async (request, h) => {
      try {
        const submission = Submission.build(request.payload)
        await submission.save()
        return h.response(submission).code(200);
      } catch (error) {
        console.error("Error fetching submission:", error);
        return h.response({ error: "Unable to fetch submission" }).code(500);
      }
    },
  },
];