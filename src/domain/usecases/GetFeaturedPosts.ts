import { getCollection } from 'astro:content';
import type { Post } from '../entities/Post';

export async function GetFeaturedPosts(limit = 3): Promise<Post[]> {
	const entries = await getCollection('blog');

	return entries
		.map((entry) => ({ slug: entry.id, ...entry.data }))
		.sort((a, b) => a.order - b.order)
		.slice(0, limit);
}
