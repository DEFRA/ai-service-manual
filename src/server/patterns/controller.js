import { createTilePageData } from '../common/helpers/tile-page-helper.js'

/**
 * Patterns controller for Defra AI Capabilities & Enablement
 */
export const patternsController = {
  handler(_request, h) {
    const { viewName, viewData } = createTilePageData({
      pageTitle: 'Patterns',
      heading: 'Patterns',
      description:
        'Showcase of experimental AI work underway or completed by the Defra AI Capabilities & Enablement team.',
      viewName: 'patterns/index',
      itemsKey: 'patterns',
      items: [
        {
          title: 'AI Assistant',
          description:
            'Live AI assistant so teams can experiment with advanced AI techniques safely and securely.',
          href: '/ai-assistant'
        },
        {
          title: 'Green summarisation',
          description:
            'Creating lightweight and environmentally friendly text summaries.',
          href: '/green-summarisation'
        },
        {
          title: 'Agent swarms',
          description:
            'Multiple specialist AI agents working together to analyse policy documents.',
          href: '/agent-swarms'
        },
        {
          title: 'Token optimisation',
          description:
            'Reducing LLM prompt sizes to cut costs and latency while preserving output quality.',
          href: '/token-optimisation'
        }
      ]
    })

    return h.view(viewName, viewData)
  }
}
