import type { PortfolioProject } from '../entities/PortfolioProject';
import type { IPortfolioProjectRepository } from '../interfaces/IPortfolioProjectRepository';

export class GetPortfolioProjects {
	constructor(private readonly portfolioProjectRepository: IPortfolioProjectRepository) {}

	execute(): Promise<PortfolioProject[]> {
		return this.portfolioProjectRepository.getAll();
	}
}
