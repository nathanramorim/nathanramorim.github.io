// Calcula a duração a partir de um período como "jan/2025 · o momento" ou "set/2021 · fev/2022".
// Conta os meses de forma inclusiva, igual ao LinkedIn (jan a jan = 1 mês).

const MESES: Record<string, number> = {
	jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5, jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11,
};

function parseMes(texto: string, hoje: Date): Date | null {
	const t = texto.trim().toLowerCase();
	if (t === 'o momento' || t === 'atual') return new Date(hoje.getFullYear(), hoje.getMonth(), 1);
	const m = t.match(/^([a-zç]{3})\/(\d{4})$/);
	if (!m || !(m[1] in MESES)) return null;
	return new Date(Number(m[2]), MESES[m[1]], 1);
}

export function intervalo(periodo: string, hoje = new Date()): { inicio: Date; fim: Date } | null {
	const partes = periodo.split('·');
	if (partes.length !== 2) return null;
	const inicio = parseMes(partes[0], hoje);
	const fim = parseMes(partes[1], hoje);
	return inicio && fim ? { inicio, fim } : null;
}

export function mesesEntre(inicio: Date, fim: Date): number {
	return (fim.getFullYear() - inicio.getFullYear()) * 12 + (fim.getMonth() - inicio.getMonth()) + 1;
}

export function formatarMeses(total: number): string {
	const anos = Math.floor(total / 12);
	const meses = total % 12;
	const a = anos ? `${anos} ${anos === 1 ? 'ano' : 'anos'}` : '';
	const m = meses ? `${meses} ${meses === 1 ? 'mês' : 'meses'}` : '';
	return [a, m].filter(Boolean).join(' ') || '1 mês';
}
