import { createTilePageData } from '../common/helpers/tile-page-helper.js'

/**
 * Lessons and Retrospectives controller for Defra AI Capabilities & Enablement
 */
export const lessonsAndRetrospectivesController = {
  handler(_request, h) {
    const { viewName, viewData } = createTilePageData({
      pageTitle: 'Lessons & Retrospectives',
      heading: 'Lessons & Retrospectives',
      description:
        "What worked, what didn't, and why. Real experiences from the AI pilot scheme.",
      viewName: 'lessons-and-retrospectives/index',
      itemsKey: 'lessons',
      items: [
        {
          title: 'AI-generated code quality',
          description:
            'Unmaintainable code despite reviews. AI created polished but tangled code that passed senior reviews but could not be fixed or extended.',
          href: '/lessons-and-retrospectives/ai-code-quality'
        },
        {
          title: 'Clear governance is essential',
          description:
            'Teams need a single source of truth for what AI tools can be used with what data to avoid shadow IT.',
          href: '/lessons-and-retrospectives/ai-governance-guidance'
        },
        {
          title: 'Always validate AI outputs',
          description:
            "Well-designed AI-generated content can hide completely inaccurate data if you don't include validation steps.",
          href: '/lessons-and-retrospectives/ai-output-validation'
        }
      ]
    })

    return h.view(viewName, viewData)
  }
}
