import type { Project } from '../entities/Project';
import type { IProjectRepository } from '../interfaces/IProjectRepository';

export class GetProjectsList {
	constructor(private readonly projectRepository: IProjectRepository) {}

	execute(): Promise<Project[]> {
		return this.projectRepository.getAll();
	}
}
