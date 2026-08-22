import type { PortfolioProject } from '../../domain/entities/PortfolioProject';
import type { IPortfolioProjectRepository } from '../../domain/interfaces/IPortfolioProjectRepository';
import { StaticJSONDataSource } from '../sources/StaticJSONDataSource';
import portfolioProjectsData from '../sources/portfolio-projects.json';

export class PortfolioProjectRepository implements IPortfolioProjectRepository {
	private readonly dataSource = new StaticJSONDataSource<PortfolioProject>(portfolioProjectsData as PortfolioProject[]);

	getAll(): Promise<PortfolioProject[]> {
		return this.dataSource.getAll();
	}
}
