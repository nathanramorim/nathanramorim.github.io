export interface ExperienceRole {
	title: string;
	period: string;
	duration?: string;
	badge?: string;
	description?: string;
	tags: string[];
	company_detail?: string;
}

export interface Experience {
	company: string;
	type: string;
	tenure: string;
	roles: ExperienceRole[];
}
