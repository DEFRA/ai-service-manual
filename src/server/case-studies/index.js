import { caseStudiesController } from './controller.js'

/**
 * Sets up the routes for case studies pages.
 * These routes are registered in src/server/router.js.
 */
export const caseStudies = {
  plugin: {
    name: 'case-studies',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/case-studies',
          ...caseStudiesController
        }
      ])
    }
  }
}
