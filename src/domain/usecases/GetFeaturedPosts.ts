import type { Post } from '../entities/Post';
import { GetAllPosts } from './GetAllPosts';

export async function GetFeaturedPosts(limit = 3): Promise<Post[]> {
	const posts = await GetAllPosts();
	return posts.slice(0, limit);
}
