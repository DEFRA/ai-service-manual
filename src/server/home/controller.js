/**
 * Home page controller for AI Capabilities & Enablement
 */
export const homeController = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home',
      cards: [
        {
          title: 'Getting started with AI',
          description:
            'Step-by-step guidance from the AI Capabilities & Enablement team on how to use AI in your role.',
          href: '/getting-started-resources'
        },
        {
          title: 'Tech radar',
          description:
            'A visual overview of the AI technologies being evaluated, trialled, adopted or retired by the AI Capabilities & Enablement team.',
          href: 'https://ai-tech-radar-frontend.dev.cdp-int.defra.cloud'
        },
        {
          title: 'Patterns',
          description:
            'Showcase of experimental AI work underway or completed by the AI Capabilities & Enablement team.',
          href: '/patterns'
        },
        {
          title: 'Prompt library',
          description: 'Effective prompts, submitted by the AI community.',
          href: 'https://ai-sdlc-prompt-library-frontend.dev.cdp-int.defra.cloud/'
        },
        {
          title: 'Blogs',
          description:
            'Case studies, lessons learnt, and insights from AI work across Defra.',
          href: '/blogs'
        }
      ],
      whatWeDo: [
        {
          title: 'Support',
          description:
            'We help teams get started with AI safely and effectively, providing practical guidance and advice tailored to real needs.',
          image: '/public/supporting.png',
          imageAlt: ''
        },
        {
          title: 'Enable',
          description:
            'We develop reusable patterns, tools and prototypes that make it easier for teams to adopt AI responsibly.',
          image: '/public/enabling.png',
          imageAlt: ''
        },
        {
          title: 'Explore',
          description:
            'We research emerging AI technologies and test new ideas through proofs of concept, so teams can learn what works before committing.',
          image: '/public/exploring.png',
          imageAlt: ''
        },
        {
          title: 'Learn',
          description:
            'We document what we discover, successes and failures. Sharing lessons, case studies, and prompts openly across the department.',
          image: '/public/learning.png',
          imageAlt: ''
        }
      ]
    })
  }
}
