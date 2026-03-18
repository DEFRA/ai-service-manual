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
          href: '/tech-radar'
        },
        {
          title: 'Case studies',
          description: 'Real examples of impactful AI use in Defra.',
          href: '/case-studies'
        },
        {
          title: 'Proofs of concept (PoCs)',
          description:
            'Showcase of experimental AI work underway or completed by the AI Capabilities & Enablement team.',
          href: '/proofs-of-concept'
        },
        {
          title: 'Prompt library',
          description: 'Effective prompts, submitted by the AI community.',
          href: '/prompt-sharing'
        },
        {
          title: 'Lessons learnt',
          description: "What worked, what didn't, and why.",
          href: '/lessons-and-retrospectives'
        }
      ],
      blogPosts: [
        {
          title: 'Avoiding the AI Factory Trap: Lessons from Delivery',
          description:
            'AI has transitioned from experimental stage to operational necessity. Learn how to avoid common pitfalls when scaling AI delivery infrastructure across your organization.',
          date: 'January 9, 2026',
          href: 'https://www.linkedin.com/pulse/you-cant-rip-replace-your-way-better-data-steven-dickinson-4xoie/',
          image: '/public/blog-ai-factory-trap.jpg',
          imageAlt: 'AI Factory Trap blog post cover'
        },
        {
          title:
            'Automating the Routine - How Multi-Agent AI Could Empower Content Designers',
          description:
            'Testing whether specialized AI agents can handle complex workflows better than monolithic language models using government content publishing as a test case.',
          date: 'December 28, 2025',
          href: 'https://www.linkedin.com/pulse/automating-routine-how-multi-agent-ai-could-empower-dickinson-gzcpe/',
          image: '/public/blog-multi-agent.jpg',
          imageAlt: 'Multi-agent AI blog post cover'
        },
        {
          title:
            "I Didn't Plan to Build an AI Agent on My Holiday… But It Taught Me Something Important",
          description:
            'An unplanned holiday experiment building an AI agent connected to UK Environment Agency open data reveals how agents investigate rather than follow rules.',
          date: 'November 22, 2025',
          href: 'https://www.linkedin.com/pulse/i-didnt-plan-build-ai-agent-my-holiday-taught-me-steven-dickinson-chkre/',
          image: '/public/blog-holiday-agent.jpg',
          imageAlt: 'Holiday AI agent blog post cover'
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
