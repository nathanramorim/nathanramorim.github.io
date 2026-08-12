import type { Experience } from '../entities/Experience';
import type { Education } from '../entities/Education';
import type { Certification } from '../entities/Certification';
import type { Language } from '../entities/Language';
import experiencesData from '../../data/sources/experiences.json';
import educationData from '../../data/sources/education.json';
import certificationsData from '../../data/sources/certifications.json';
import languagesData from '../../data/sources/languages.json';

export interface ExperienceHistory {
	experiences: Experience[];
	education: Education[];
	certifications: Certification[];
	languages: Language[];
}

export async function GetExperienceHistory(): Promise<ExperienceHistory> {
	return {
		experiences: experiencesData as Experience[],
		education: educationData as Education[],
		certifications: certificationsData as Certification[],
		languages: languagesData as Language[],
	};
}
