import type { Project } from '../../domain/entities/Project';
import type { IProjectRepository } from '../../domain/interfaces/IProjectRepository';
import { StaticJSONDataSource } from '../sources/StaticJSONDataSource';
import projectsData from '../sources/projects.json';

export class ProjectRepository implements IProjectRepository {
	private readonly dataSource = new StaticJSONDataSource<Project>(projectsData as Project[]);

	getAll(): Promise<Project[]> {
		return this.dataSource.getAll();
	}
}
