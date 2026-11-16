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
	/** true = mantém o tenure escrito à mão em vez de calcular pelos cargos */
	tenureFixo?: boolean;
	roles: ExperienceRole[];
}
