export interface ProjectHighlight {
	title: string;
	description: string;
}

export interface Project {
	slug: string;
	name: string;
	package: string;
	version: string;
	tagline: string;
	description: string;
	url: string;
	highlights: ProjectHighlight[];
	compatibility: string[];
	tags: string[];
}
