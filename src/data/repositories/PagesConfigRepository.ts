import { parse } from 'smol-toml';
import type { PagesConfig } from '../../domain/entities/PagesConfig';
import rawConfig from '../sources/pages.config.toml?raw';

export class PagesConfigRepository {
	getConfig(): PagesConfig {
		return parse(rawConfig) as unknown as PagesConfig;
	}

	isEnabled(slug: string): boolean {
		return this.getConfig().pages[slug]?.enabled ?? false;
	}
}
