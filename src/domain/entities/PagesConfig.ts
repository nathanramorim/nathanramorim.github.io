export interface PageConfig {
	enabled: boolean;
}

export interface PagesConfig {
	pages: Record<string, PageConfig>;
}
