import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import config from "./config/config";
import { readFile, writeFile } from "fs/promises";
type Student = {
	id: number;
	name: string;
};
const students = {
	read: async () => {
		return JSON.parse(await readFile("./src/data/students.json", "utf-8")) as Student[];
	},
	write: (data: Student[]) => {
		writeFile("./src/data/students.json", JSON.stringify(data, null, 2), {
			encoding: "utf-8",
		});
	},
};
const app = new Hono();
app.use("*", cors());

app.get("/", (ctx) => {
	return ctx.html("We are live!");
});
app.get("/api/students", async (ctx) => {
	return ctx.json(JSON.stringify(await students.read()));
});
app.put("/api/students", async (ctx) => {
	let data = await ctx.req.json();
	let studentsData = await students.read();
	studentsData.push({ id: studentsData.length + 1, name: data.name });
	students.write(studentsData);
	return ctx.json({ message: "Added student successfully" });
});
app.delete("/api/students/:id", async (ctx) => {
	let id = Number(await ctx.req.param("id"));
	let studentsData = await students.read();
	studentsData = studentsData.filter((student) => student.id !== id);
	students.write(studentsData);
	ctx.status(204);
	return ctx.body(null);
});
const port = config.port;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
