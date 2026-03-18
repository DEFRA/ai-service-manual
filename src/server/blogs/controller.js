import { createTilePageData } from '../common/helpers/tile-page-helper.js'

/**
 * Blogs controller for Defra AI Capabilities & Enablement
 */
export const blogsController = {
  handler(_request, h) {
    const { viewName, viewData } = createTilePageData({
      pageTitle: 'Blogs',
      heading: 'Blogs',
      description:
        'Case studies, lessons learnt, and insights from AI work across Defra.',
      viewName: 'blogs/index',
      itemsKey: 'blogs',
      items: [
        {
          title: 'NRF Discovery',
          description:
            '56% faster user research synthesis. A 12-week discovery with a smaller team proved AI can deliver comprehensive results in the same timeframe.',
          href: '/blogs/nrf-discovery'
        },
        {
          title: 'IPAFFS re-platforming',
          description:
            '75% faster migration. Legacy service moved to new CDP cloud infrastructure in a quarter of the estimated time.',
          href: '/blogs/ipaffs-replatforming'
        },
        {
          title: 'PLP Cycle Time',
          description:
            '61% reduction in delivery cycle time. GitHub Copilot adoption brought measurable improvements to development speed.',
          href: '/blogs/plp-cycle-time'
        },
        {
          title: 'NRF Alpha',
          description:
            'One of the best service standard assessments in Defra history. A team with AI experience moved from discovery to alpha with exceptional results.',
          href: '/blogs/nrf-alpha'
        },
        {
          title: 'AI-generated code quality',
          description:
            'Unmaintainable code despite reviews. AI created polished but tangled code that passed senior reviews but could not be fixed or extended.',
          href: '/blogs/ai-code-quality'
        },
        {
          title: 'Clear governance is essential',
          description:
            'Teams need a single source of truth for what AI tools can be used with what data to avoid shadow IT.',
          href: '/blogs/ai-governance-guidance'
        },
        {
          title: 'Always validate AI outputs',
          description:
            "Well-designed AI-generated content can hide completely inaccurate data if you don't include validation steps.",
          href: '/blogs/ai-output-validation'
        }
      ]
    })

    return h.view(viewName, viewData)
  }
}
