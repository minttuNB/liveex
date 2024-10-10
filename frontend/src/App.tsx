import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { StudentProps } from "./components/types";
import StudentCreationForm from "./components/StudentCreationForm";
import StudentsFilter from "./components/StudentsFilter";
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
	const [currentFilter, setCurrentFilter] = useState("");
	function onAddStudent(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const stud: StudentProps = {
			id: crypto.randomUUID(),
			name: document.querySelector<HTMLInputElement>("#studentName")!.value,
		};
		setStudents((students) => [...students, stud]);
	}
	function onRemoveStudent(id: string) {
		setStudents((students) => students.filter((student) => student.id !== id));
	}
	function onFilterChange(event: React.ChangeEvent<HTMLSelectElement>): void {
		const value = event.target.value;
		if (value !== "No filter") {
			setCurrentFilter(value);
		} else {
			setCurrentFilter("");
		}
	}
	return (
		<>
			<h1>Start</h1>
			<Total total={students.length} />
			<Grid
				elements={
					currentFilter !== ""
						? students.filter((student) => student.name.toUpperCase().startsWith(currentFilter))
						: students
				}
				onRemoveStudent={onRemoveStudent}
			>
				<h1>Studenter</h1>
				<h2>Filter students list</h2>
				<StudentsFilter data={students} onFilterChange={onFilterChange} />
			</Grid>
			<StudentCreationForm onAddStudent={onAddStudent} />
		</>
	);
}

export default App;
