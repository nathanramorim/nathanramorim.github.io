import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		eyebrow: z.string(),
		order: z.number(),
		summary: z.string(),
		hashtags: z.array(z.string()),
	}),
});

export const collections = { blog };
