
import { sequelize } from '../../config/db.js';
import initialiseServer from '../../server.js'


/** @type {import('@hapi/hapi').Server} */
let server

describe('river-controller', () => {
  beforeAll(async () => {
    server = await initialiseServer()
  })

  afterAll(async () => {
    //await sequelize.close()
    await server.stop()
    // do I need to call await sequelize.close()
  })

  it('returns all rivers', async () => {
    const result = await server.inject({ method: 'GET', url: '/river' })
    expect(result).toMatchObject({
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
    const payload = JSON.parse(result.payload)
    expect(payload).toHaveLength(265)
  })
});