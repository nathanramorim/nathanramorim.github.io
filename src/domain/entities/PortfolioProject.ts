export interface PortfolioProject {
	slug: string;
	name: string;
	tagline: string;
	problema: string;
	solucao: string;
	resultado: string;
	stack: string[];
	status: string;
	destaque: boolean;
	image: string;
	imageAlt: string;
	link: string | null;
	linkLabel: string | null;
}
