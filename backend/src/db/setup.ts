import { DB } from "./db";
import { createTables } from "./tables";

export const setup = async (db: DB) => {
	await createTables(db);
};
