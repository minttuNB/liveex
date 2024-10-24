import { readFile } from "fs/promises";
import { DB } from "./db";
import { Student } from "../types";

export const seed = async (db: DB) => {
	const data = JSON.parse(await readFile("src/db/data.json", "utf-8")).students as Student[];
	const insertStatement = db.prepare(
		`INSERT INTO students (id, name, created_at, updated_at) VALUES (@id, @name, @createdAt, @updatedAt)`
	);
	const insertMany = db.transaction((students: Student[]) => {
		for (const student of students) {
			insertStatement.run(student);
		}
	});
	insertMany(data);
};
