import { contentController } from './controller.js'

/**
 * Sets up the routes for content pages.
 * These routes are registered in src/server/router.js.
 */
export const content = {
  plugin: {
    name: 'content',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/{slug}',
          ...contentController
        },
        {
          method: 'GET',
          path: '/{category}/{slug}',
          ...contentController
        }
      ])
    }
  }
}
