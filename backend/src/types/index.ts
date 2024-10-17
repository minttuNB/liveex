import { UUID } from "crypto";
type Student = {
	id: UUID;
	name: string;
};
type Result<T> = { success: true; data: T } | { success: false; error: string };
export type { Result, Student };
