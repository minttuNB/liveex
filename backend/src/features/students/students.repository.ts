import { Result } from "../../types";

export interface StudentRepository {
	list: (query?: Record<string, string>) => Promise<Result<string[]>>;
	create: (data: Record<string, string>) => Promise<Result<string>>;
}
export const createStudentRepository = (db: unknown): StudentRepository => {
	return {
		list: () => {},
		create: () => {},
	};
};

export const StudentRepository = createStudentRepository({});
