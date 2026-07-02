export interface BlogPostConfig {
	enabled: boolean;
}

export interface BlogConfig {
	posts: Record<string, BlogPostConfig>;
}
