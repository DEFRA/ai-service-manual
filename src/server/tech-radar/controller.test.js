import { createServer } from '../server.js'
import { statusCodes } from '../common/constants/status-codes.js'

describe('#techRadarController', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterAll(async () => {
    await server.stop({ timeout: 0 })
  })

  test('Should display full screen view when fullscreen query parameter is true', async () => {
    const { result, statusCode } = await server.inject({
      method: 'GET',
      url: '/tech-radar?fullscreen=true'
    })

    expect(result).toEqual(expect.stringContaining('Tech Radar'))
    expect(statusCode).toBe(statusCodes.ok)
  })

  test.each(['false', 'yes', '1'])(
    'Should display normal view when fullscreen query parameter is not true',
    async (value) => {
      const { result, statusCode } = await server.inject({
        method: 'GET',
        url: `/tech-radar?fullscreen=${value}`
      })

      expect(result).toEqual(expect.stringContaining('Tech Radar'))
      expect(statusCode).toBe(statusCodes.ok)
    }
  )

  test('Should display normal view when query string is empty', async () => {
    const { result, statusCode } = await server.inject({
      method: 'GET',
      url: '/tech-radar'
    })

    expect(result).toEqual(expect.stringContaining('Tech Radar'))
    expect(statusCode).toBe(statusCodes.ok)
  })
})
