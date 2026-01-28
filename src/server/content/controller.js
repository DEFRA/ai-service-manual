import { loadContent } from '../common/helpers/content-loader.js'
import { markdown } from '../../config/nunjucks/filters/markdown.js'

const contentRoutes = {
  'getting-started-with-ai': 'getting-started-with-ai.md',
  'tech-radar': 'tech-radar.md',
  'case-studies/nrf-discovery': 'nrf-discovery.md',
  'case-studies/ipaffs-replatforming': 'ipaffs-replatforming.md',
  'case-studies/plp-cycle-time': 'plp-cycle-time.md',
  'case-studies/nrf-alpha': 'nrf-alpha.md',
  patterns: 'patterns.md',
  'proofs-of-concept': 'proofs-of-concept.md',
  prototypes: 'prototypes.md',
  'ai-assistant': 'ai-assistant.md',
  'prompt-sharing': 'prompt-sharing.md',
  'lessons-and-retrospectives': 'lessons-and-retrospectives.md',
  'links-to-cdp': 'links-to-cdp.md'
}

export const contentController = {
  handler(request, h) {
    const category = request.params.category
    const slug = request.params.slug
    const routeKey = category ? `${category}/${slug}` : slug
    const filename = contentRoutes[routeKey]

    if (!filename) {
      return h
        .view('error/index', {
          pageTitle: 'Page not found',
          heading: 'Page not found',
          message: 'The page you are looking for could not be found.'
        })
        .code(404)
    }

    try {
      const { meta, content } = loadContent(filename)
      const renderedContent = markdown(content)

      const breadcrumbs = [
        {
          text: 'Home',
          href: '/'
        }
      ]

      if (category) {
        breadcrumbs.push({
          text: 'Case Studies',
          href: '/case-studies'
        })
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
