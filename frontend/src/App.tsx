import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { StudentProps } from "./components/types";
import StudentCreationForm from "./components/StudentCreationForm";
const studentsArray: StudentProps[] = [
	{
		id: "0",
		name: "Anders",
	},
	{
		id: "1",
		name: "Espen",
	},
	{
		id: "2",
		name: "Ada",
	},
	{
		id: "3",
		name: "Aine",
	},
];
function App() {
	const [students, setStudents] = useState(studentsArray ?? []);
	function onAddStudent(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const stud: StudentProps = {
			id: crypto.randomUUID(),
			name: document.querySelector<HTMLInputElement>("#studentName")!
				.value,
		};
		setStudents((students) => [...students, stud]);
	}
	function onRemoveStudent(id: string){
		setStudents((students) => students.filter(student => student.id !== id));
	}
	return (
		<>
			<h1>Start</h1>
			<Total total={students.length} />
			<Grid elements={students} onRemoveStudent={onRemoveStudent}>
				<h1>Studenter</h1>
			</Grid>
			<StudentCreationForm onAddStudent={onAddStudent} />
		</>
	);
}

export default App;
