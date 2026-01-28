import { loadContent } from '../common/helpers/content-loader.js'
import { markdown } from '../../config/nunjucks/filters/markdown.js'

const contentRoutes = {
  'getting-started-with-ai': 'getting-started-with-ai.md',
  'tech-radar': 'tech-radar.md',
  'case-studies': 'case-studies.md',
  patterns: 'patterns.md',
  'proofs-of-concept': 'proofs-of-concept.md',
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
    const slug = request.params.slug
    const routeConfig = contentRoutes[slug]

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

      return h.view('content/index', {
        pageTitle: meta.title || slug,
        heading: meta.title || slug,
        content: renderedContent,
        breadcrumbs: [
          {
            text: 'Home',
            href: '/'
          },
          {
            text: meta.title || slug
          }
        ]
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
