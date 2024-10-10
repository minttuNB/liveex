import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
const students = [
	{
		id: 0,
		name: "Anders",
	},
	{
		id: 1,
		name: "Espen",
	},
	{
		id: 2,
		name: "Ada",
	},
	{
		id: 3,
		name: "Aine",
	},
];
const app = new Hono();
app.use("*", cors());

app.get("/", (ctx) => {
	return ctx.html("We are live!");
});
app.get("/api/students", async (ctx) => {
	return ctx.json(JSON.stringify(students));
});
app.put("/api/students", async (ctx) => {
	let data = await ctx.req.json();
	students.push({ id: students.length + 1, name: data.name });
	return ctx.json({ message: "Added student successfully" });
});
const port = 3999;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
