
import { sequelize } from '../../config/db.js';
import initialiseServer from '../../server.js'
import { truncate } from '../../test-utils/db-util.js';


/** @type {import('@hapi/hapi').Server} */
let server

describe.only('submission-controller', () => {
  beforeAll(async () => {
    server = await initialiseServer()
  })

  afterAll(async () => {
    await server.stop()
  })

  beforeEach(async () => {
    // truncate tables before each test
    await truncate()
  })

  it('returns all submissions', async () => {
    await server.inject({
      method: 'POST',
      url: '/submission',
      payload: {
        "contactId": "contact-identifier-718",
        "season": 2022,
        "version": "2024-06-26 13:21:36.790",
        "status": "INCOMPLETE",
        "source": "WEB",
        "reportingExclude": false,
        "version": "2024-06-26 13:21:36.790"
      }
    })

    const result = await server.inject({ method: 'GET', url: '/submission' })
    const payload = JSON.parse(result.payload)
    expect(payload).toHaveLength(1)
  })
});
