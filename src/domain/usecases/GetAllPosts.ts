import { getCollection } from 'astro:content';
import type { Post } from '../entities/Post';
import { slugify } from '../utils/slugify';
import { BlogConfigRepository } from '../../data/repositories/BlogConfigRepository';

export async function GetAllPosts(): Promise<Post[]> {
	const entries = await getCollection('blog');
	const blogConfig = new BlogConfigRepository();

	return entries
		.map((entry) => ({
			...entry.data,
			slug: slugify(entry.data.title),
			enabled: blogConfig.isEnabled(entry.id),
		}))
		.sort((a, b) => b.order - a.order);
}
