import type { Experience } from '../entities/Experience';
import type { Education } from '../entities/Education';
import type { Certification } from '../entities/Certification';
import type { Language } from '../entities/Language';
import experiencesData from '../../data/sources/experiences.json';
import educationData from '../../data/sources/education.json';
import certificationsData from '../../data/sources/certifications.json';
import languagesData from '../../data/sources/languages.json';
import { intervalo, mesesEntre, formatarMeses } from '../utils/duracao';

export interface ExperienceHistory {
	experiences: Experience[];
	education: Education[];
	certifications: Certification[];
	languages: Language[];
}

/**
 * Calcula a duração de cada cargo e o tempo em cada empresa a partir dos períodos,
 * para não depender de texto fixo que envelhece. Empresas com "tenureFixo": true
 * mantêm o tempo escrito à mão (ex.: quando os cargos não refletem o tempo real).
 */
export function comTempoCalculado(lista: Experience[], hoje = new Date()): Experience[] {
	return lista.map((exp) => {
		const roles = exp.roles.map((role) => {
			const iv = intervalo(role.period, hoje);
			return iv ? { ...role, duration: formatarMeses(mesesEntre(iv.inicio, iv.fim)) } : role;
		});
		if (exp.tenureFixo) return { ...exp, roles };
		const ivs = exp.roles.map((r) => intervalo(r.period, hoje)).filter((x) => x !== null);
		if (ivs.length !== exp.roles.length || ivs.length === 0) return { ...exp, roles };
		const inicio = new Date(Math.min(...ivs.map((x) => x.inicio.getTime())));
		const fim = new Date(Math.max(...ivs.map((x) => x.fim.getTime())));
		return { ...exp, roles, tenure: formatarMeses(mesesEntre(inicio, fim)) };
	});
}

export async function GetExperienceHistory(): Promise<ExperienceHistory> {
	return {
		experiences: comTempoCalculado(experiencesData as Experience[]),
		education: educationData as Education[],
		certifications: certificationsData as Certification[],
		languages: languagesData as Language[],
	};
}
