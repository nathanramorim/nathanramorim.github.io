import type { Project } from '../entities/Project';

export interface IProjectRepository {
	getAll(): Promise<Project[]>;
}
