import { getCollection } from 'astro:content';
import type { Post } from '../entities/Post';
import { slugify } from '../utils/slugify';
import { BlogConfigRepository } from '../../data/repositories/BlogConfigRepository';

export async function GetAllPosts(): Promise<Post[]> {
	const entries = await getCollection('blog');
	const blogConfig = new BlogConfigRepository();

	return entries
		.filter((entry) => blogConfig.isEnabled(entry.id))
		.map((entry) => ({ slug: slugify(entry.data.title), ...entry.data }))
		.sort((a, b) => b.order - a.order);
}
