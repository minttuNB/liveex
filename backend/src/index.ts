import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import config from "./config/config";
import { readFile, writeFile } from "fs/promises";
import { UUID } from "crypto";
type Student = {
	id: UUID;
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
const validateName = (name: string) => {
	name = name.trim();
	return name.length > 4 && name.includes(" ") && name[name.length - 1] === "!";
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
	if (!validateName(data.name)) {
		ctx.status(400);
		return ctx.json({ success: false, error: "Invalid name" });
	}
	let studentsData = await students.read();
	studentsData.push({ id: crypto.randomUUID(), name: data.name });
	students.write(studentsData);
	return ctx.json({ success: true, message: "Added student successfully" });
});
app.delete("/api/students/:id", async (ctx) => {
	let id = await ctx.req.param("id");
	let studentsData = await students.read();
	studentsData = studentsData.filter((student) => student.id !== id);
	students.write(studentsData);
	ctx.status(204);
	return ctx.body(null);
});
app.patch("/api/students/:id", async (ctx) => {
	let data = await ctx.req.json();
	let id = await ctx.req.param("id");
	let studentsData = await students.read();
	let student = studentsData.find((student) => student.id === id);
	if (student) {
		student.name = data.name;
		students.write(studentsData);
		ctx.status(204);
		return ctx.body(null);
	} else {
		ctx.status(400);
		return ctx.json({ success: false, message: "Student with given id not found" });
	}
});
const port = config.port;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
