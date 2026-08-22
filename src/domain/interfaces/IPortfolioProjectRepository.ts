import type { PortfolioProject } from '../entities/PortfolioProject';

export interface IPortfolioProjectRepository {
	getAll(): Promise<PortfolioProject[]>;
}
