import { proofsOfConceptController } from './controller.js'

/**
 * Sets up the routes for proofs of concept pages.
 * These routes are registered in src/server/router.js.
 */
export const proofsOfConcept = {
  plugin: {
    name: 'proofs-of-concept',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/proofs-of-concept',
          ...proofsOfConceptController
        }
      ])
    }
  }
}
