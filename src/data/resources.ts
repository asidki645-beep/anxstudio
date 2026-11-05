import content from '../../content/resources.json';
import type { Resource } from '../types';

export const RESOURCES = content.resources as Resource[];

export const FEATURED_RESOURCES = RESOURCES.filter((resource) => resource.featured);

export function getResourceBySlug(slug: string | undefined) {
  return RESOURCES.find((resource) => resource.slug === slug);
}
