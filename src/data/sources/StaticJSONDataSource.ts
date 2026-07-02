export class StaticJSONDataSource<T> {
	constructor(private readonly data: T[]) {}

	async getAll(): Promise<T[]> {
		return this.data;
	}
}
