import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import { StudentProps } from "./components/types";
import StudentCreationForm from "./components/StudentCreationForm";
import StudentsFilter from "./components/Filter";
import Student from "./components/Student";
import config from "./config";
function App() {
	const [students, setStudents] = useState<StudentProps[]>([]);
	const [studentsFetchingError, setStudentsFetchingError] = useState("");
	const [loading, setLoading] = useState(false);
	const [currentFilter, setCurrentFilter] = useState("");
	async function fetchStudentData() {
		try {
			setLoading(true);
			const response = await fetch(new URL(`${config.apiAddress}:${config.apiPort}/api/students`));
			const studentsList: StudentProps[] = await response.json();
			setLoading(false);
			setStudents(studentsList);
			setStudentsFetchingError("");
		} catch (error) {
			setStudentsFetchingError(`An error has occured while fetching the student list: ${error.message}`);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchStudentData();
	}, []);
	console.log(students);
	const filterOptions =
		students.length > 0
			? [...new Set(students.map((student: StudentProps) => student.name.slice(0, 1).toUpperCase()))].sort()
			: [];
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
			<h1>Studenter</h1>
			<h2>Filter students list</h2>
			<StudentsFilter options={filterOptions} onFilterChange={onFilterChange} />
			<Grid>
				{loading ? (
					<p>Loading...</p>
				) : studentsFetchingError !== "" ? (
					<p>{studentsFetchingError}</p>
				) : (
					(currentFilter !== ""
						? students.filter((student) => student.name.toUpperCase().startsWith(currentFilter))
						: students
					).map((student: StudentProps) => (
						<Student
							key={student.id}
							name={student.name}
							id={student.id}
							onRemoveStudent={onRemoveStudent}
						/>
					))
				)}
			</Grid>
			<StudentCreationForm onAddStudent={onAddStudent} />
		</>
	);
}

export default App;
