import { createTilePageData } from '../common/helpers/tile-page-helper.js'

/**
 * Case Studies controller for Defra AI Capabilities & Enablement
 */
export const caseStudiesController = {
  handler(_request, h) {
    const { viewName, viewData } = createTilePageData({
      pageTitle: 'Case Studies',
      heading: 'Case Studies',
      description:
        'Real examples of AI use across Defra. From small experiments to large transformations. This is where you see what is actually happening across the department.',
      viewName: 'case-studies/index',
      itemsKey: 'caseStudies',
      items: [
        {
          title: 'NRF Discovery',
          description:
            '56% faster user research synthesis. A 12-week discovery with a smaller team proved AI can deliver comprehensive results in the same timeframe.',
          href: '/case-studies/nrf-discovery'
        },
        {
          title: 'IPAFFS Replatforming',
          description:
            '75% faster migration. Legacy service moved to new CDP cloud infrastructure in a quarter of the estimated time.',
          href: '/case-studies/ipaffs-replatforming'
        },
        {
          title: 'PLP Cycle Time',
          description:
            '61% reduction in delivery cycle time. GitHub Copilot adoption brought measurable improvements to development speed.',
          href: '/case-studies/plp-cycle-time'
        },
        {
          title: 'NRF Alpha',
          description:
            'Best service standards review in Defra history. A team with AI experience moved from discovery to alpha with exceptional results.',
          href: '/case-studies/nrf-alpha'
        }
      ]
    })

    return h.view(viewName, viewData)
  }
}
