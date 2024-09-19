import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { StudentProps } from "./components/types";
import StudentCreationForm from "./components/StudentCreationForm";
const studentsArray: StudentProps[] = [
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
	const [students, setStudents] = useState(studentsArray);
	function onAddStudent(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const stud: StudentProps = {
			id: students.length+1,
			name: document.querySelector<HTMLInputElement>("#studentName")!
				.value,
		};
		setStudents((students) => [...students, stud]);
	}
	return (
		<>
			<h1>Start</h1>
			<Total total={students.length} />
			<Grid elements={students}></Grid>
			<StudentCreationForm onAddStudent={onAddStudent} />
		</>
	);
}

export default App;
