import Grid from "./components/Grid";
import { StudentProps } from "./components/types";
const students: StudentProps[] = [
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
function App() {
	return (
		<>
			<h1>Start</h1>
			<Grid elements={students}></Grid>
		</>
	);
}

export default App;
