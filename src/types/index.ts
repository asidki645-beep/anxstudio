export type CategoryKey = 'skills' | 'prompts' | 'templates';

export type ContentStatus = 'preview' | 'ready';

export interface Resource {
  slug: string;
  title: string;
  category: CategoryKey;
  description: string;
  overview: string;
  benefits: string[];
  includedFiles: string[];
  includedFilesNote: string;
  requirements: string[];
  requirementsNote: string;
  usageInstructions: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  contentStatus: ContentStatus;
  featured: boolean;
}

export interface Category {
  key: CategoryKey;
  label: string;
  shortLabel: string;
  singularLabel: string;
  description: string;
  longDescription: string;
  route: string;
}
