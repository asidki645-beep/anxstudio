import type { Category, CategoryKey } from '../types';

export const CATEGORIES: Category[] = [
  {
    key: 'skills',
    label: 'ChatGPT Skills',
    shortLabel: 'Skills',
    singularLabel: 'ChatGPT Skill',
    description: 'Give your AI a new capability.',
    longDescription:
      'Explore focused ChatGPT Skill concepts designed to support repeatable creative and review workflows.',
    route: '/library/skills',
  },
  {
    key: 'prompts',
    label: 'AI Prompts',
    shortLabel: 'Prompts',
    singularLabel: 'AI Prompt Pack',
    description: 'Start with the right words.',
    longDescription:
      'Browse structured prompt-pack concepts for product imagery, brand direction, and creative exploration.',
    route: '/library/prompts',
  },
  {
    key: 'templates',
    label: 'CapCut Templates',
    shortLabel: 'Templates',
    singularLabel: 'CapCut Template',
    description: 'Make your next edit stand out.',
    longDescription:
      'Preview vertical-video template concepts for captions, product stories, and clean social edits.',
    route: '/library/templates',
  },
];

export const CATEGORY_BY_KEY = Object.fromEntries(
  CATEGORIES.map((category) => [category.key, category]),
) as Record<CategoryKey, Category>;
