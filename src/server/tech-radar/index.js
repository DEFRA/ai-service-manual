import { techRadarController } from './controller.js'

/**
 * Sets up the routes for tech radar page.
 * These routes are registered in src/server/router.js.
 */
export const techRadar = {
  plugin: {
    name: 'tech-radar',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/tech-radar',
          ...techRadarController
        }
      ])
    }
  }
}
