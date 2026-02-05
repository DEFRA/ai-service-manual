import { loadContent } from '../common/helpers/content-loader.js'
import { markdown } from '../../config/nunjucks/filters/markdown.js'

const contentRoutes = {
  'getting-started-with-ai': 'getting-started-with-ai.md',
  'tech-radar': 'tech-radar.md',
  'case-studies/nrf-discovery': 'nrf-discovery.md',
  'case-studies/ipaffs-replatforming': 'ipaffs-replatforming.md',
  'case-studies/plp-cycle-time': 'plp-cycle-time.md',
  'case-studies/nrf-alpha': 'nrf-alpha.md',
  'lessons-and-retrospectives/ai-code-quality': 'ai-code-quality.md',
  'lessons-and-retrospectives/ai-governance-guidance':
    'ai-governance-guidance.md',
  'lessons-and-retrospectives/ai-output-validation': 'ai-output-validation.md',
  patterns: 'patterns.md',
  prototypes: 'prototypes.md',
  'ai-assistant': 'ai-assistant.md',
  'prompt-sharing': 'prompt-sharing.md',
  'lessons-and-retrospectives': 'lessons-and-retrospectives.md',
  'links-to-cdp': 'links-to-cdp.md',
  'green-summarisation': {
    externalUrl:
      'https://raw.githubusercontent.com/DEFRA/ai-spike-green-summarisation/refs/heads/main/README.md'
  }
}

export const contentController = {
  async handler(request, h) {
    const category = request.params.category
    const slug = request.params.slug
    const routeKey = category ? `${category}/${slug}` : slug
    const routeConfig = contentRoutes[routeKey]

    if (!routeConfig) {
      return h
        .view('error/index', {
          pageTitle: 'Page not found',
          heading: 'Page not found',
          message: 'The page you are looking for could not be found.'
        })
        .code(404)
    }

    try {
      const filename = typeof routeConfig === 'string' ? routeConfig : null
      const externalUrl =
        typeof routeConfig === 'object' ? routeConfig.externalUrl : null
      const { meta, content } = await loadContent(filename, externalUrl)
      const renderedContent = markdown(content)

      const breadcrumbs = [
        {
          text: 'Home',
          href: '/'
        }
      ]

      if (category) {
        if (category === 'case-studies') {
          breadcrumbs.push({
            text: 'Case Studies',
            href: '/case-studies'
          })
        } else if (category === 'lessons-and-retrospectives') {
          breadcrumbs.push({
            text: 'Lessons & Retrospectives',
            href: '/lessons-and-retrospectives'
          })
        }
      }

      breadcrumbs.push({
        text: meta.title || slug
      })

      return h.view('content/index', {
        pageTitle: meta.title || slug,
        heading: meta.title || slug,
        content: renderedContent,
        breadcrumbs
      })
    } catch (error) {
      return h
        .view('error/index', {
          pageTitle: 'Error',
          heading: 'Error',
          message: error.message
        })
        .code(500)
    }
  }
}
