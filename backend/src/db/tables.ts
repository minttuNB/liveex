import { DB } from "./db";

export const createTables = (db: DB) => {
	db.exec(`
		CREATE TABLE IF NOT EXISTS students (
		  id UUID NOT NULL PRIMARY KEY,
		  name TEXT NOT NULL,
		  created_at TIMESTAMP NOT NULL,
		  updated_at TIMESTAMP NOT NULL
		);
	  `);
};
