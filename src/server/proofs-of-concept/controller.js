import { createTilePageData } from '../common/helpers/tile-page-helper.js'

/**
 * Proofs of Concept controller for Defra AI Capabilities & Enablement
 */
export const proofsOfConceptController = {
  handler(_request, h) {
    const { viewName, viewData } = createTilePageData({
      pageTitle: 'Proofs of Concept (PoCs)',
      heading: 'Proofs of Concept (PoCs)',
      description:
        'Showcase of experimental AI work underway or completed by the Defra AI Capabilities & Enablement team.',
      viewName: 'proofs-of-concept/index',
      itemsKey: 'proofsOfConcept',
      items: [
        {
          title: 'AI Assistant',
          description:
            'Live AI assistant for teams to experiment with advanced AI techniques safely and securely.',
          href: '/ai-assistant'
        },
        {
          title: 'Green Summarisation',
          description:
            'Creating lightweight / environmentally friendly text summaries.',
          href: '/green-summarisation'
        },
        {
          title: 'Agent Swarms',
          description:
            'Multiple specialist AI agents working together to analyse policy documents.',
          href: '/agent-swarms'
        },
        {
          title: 'Token Optimisation',
          description:
            'Reducing LLM prompt sizes to cut costs and latency while preserving output quality.',
          href: '/token-optimisation'
        }
      ]
    })

    return h.view(viewName, viewData)
  }
}
