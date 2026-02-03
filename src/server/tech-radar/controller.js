/**
 * Tech Radar controller for Defra AI Capabilities & Enablement
 */
export const techRadarController = {
  handler(_request, h) {
    return h.view('tech-radar/index', {
      pageTitle: 'Tech Radar',
      heading: 'Tech Radar',
      description:
        'Visual overview of AI technologies being evaluated, trialled, adopted or retired by the Defra AI Capabilities & Enablement team.',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Tech Radar'
        }
      ],
      relatedPages: [
        {
          text: 'Getting Started with AI',
          href: '/getting-started-with-ai'
        },
        {
          text: 'Proofs of Concept (PoCs)',
          href: '/proofs-of-concept'
        },
        {
          text: 'Prototypes',
          href: '/prototypes'
        },
        {
          text: 'Patterns',
          href: '/patterns'
        }
      ]
    })
  }
}
