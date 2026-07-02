import { parse } from 'smol-toml';
import type { BlogConfig } from '../../domain/entities/BlogConfig';
import rawConfig from '../sources/blog.config.toml?raw';

export class BlogConfigRepository {
	getConfig(): BlogConfig {
		return parse(rawConfig) as unknown as BlogConfig;
	}

	isEnabled(slug: string): boolean {
		return this.getConfig().posts[slug]?.enabled ?? false;
	}
}
