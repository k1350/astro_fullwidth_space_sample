import { z, defineCollection } from 'astro:content';

const novelCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'novel': novelCollection,
};