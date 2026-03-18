import { blogsController } from './controller.js'

/**
 * Sets up the routes for blogs pages.
 * These routes are registered in src/server/router.js.
 */
export const blogs = {
  plugin: {
    name: 'blogs',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/blogs',
          ...blogsController
        }
      ])
    }
  }
}
