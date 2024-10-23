import Database from "better-sqlite3";
import { env } from "process";
export const db = new Database(env.DATABASE_URL, { verbose: (str) => console.log(str) });
export type DB = typeof db;
