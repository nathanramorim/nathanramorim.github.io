import { getCollection } from 'astro:content';
import type { Post } from '../entities/Post';
import { slugify } from '../utils/slugify';

export async function GetAllPosts(): Promise<Post[]> {
	const entries = await getCollection('blog');

	return entries
		.map((entry) => ({ slug: slugify(entry.data.title), ...entry.data }))
		.sort((a, b) => b.order - a.order);
}
