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

app.get("/", (c) => {
	return c.text("Hello Hono!");
});
app.get("/api/students", async (ctx) => {
	ctx.json(JSON.stringify(students));
});
const port = 3999;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
