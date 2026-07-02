import type { Experience } from '../entities/Experience';
import type { Education } from '../entities/Education';
import experiencesData from '../../data/sources/experiences.json';
import educationData from '../../data/sources/education.json';

export interface ExperienceHistory {
	experiences: Experience[];
	education: Education[];
}

export async function GetExperienceHistory(): Promise<ExperienceHistory> {
	return {
		experiences: experiencesData as Experience[],
		education: educationData as Education[],
	};
}
