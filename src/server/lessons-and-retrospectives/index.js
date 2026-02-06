import { lessonsAndRetrospectivesController } from './controller.js'

/**
 * Sets up the routes for lessons and retrospectives pages.
 * These routes are registered in src/server/router.js.
 */
export const lessonsAndRetrospectives = {
  plugin: {
    name: 'lessons-and-retrospectives',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/lessons-and-retrospectives',
          ...lessonsAndRetrospectivesController
        }
      ])
    }
  }
}
