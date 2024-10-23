import Database from "better-sqlite3";
import { env } from "../lib/env";
console.log(env.DATABASE_URL);
export const db = new Database(env.DATABASE_URL, { verbose: (str) => console.log(str) });
export type DB = typeof db;
