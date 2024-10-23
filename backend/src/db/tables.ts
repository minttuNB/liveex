import { DB } from "./db";

export const createTables = (db: DB) => {
	console.dir(
		db.exec(`
		CREATE TABLE IF NOT EXISTS students (
		  id TEXT NOT NULL PRIMARY KEY,
		  name TEXT NOT NULL,
		  created_at TEXT NOT NULL,
		  updated_at TEXT NOT NULL
		);
	  `).name
	);
};
