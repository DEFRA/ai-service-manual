import { patternsController } from './controller.js'

/**
 * Sets up the routes for patterns pages.
 * These routes are registered in src/server/router.js.
 */
export const patterns = {
  plugin: {
    name: 'patterns',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/patterns',
          ...patternsController
        }
      ])
    }
  }
}
