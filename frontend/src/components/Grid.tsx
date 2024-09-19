import { useState } from "react";
import Student from "./Student";
import { GridProps, StudentProps } from "./types";
import StudentCreationForm from "./StudentCreationForm";
function Grid(props: GridProps) {
	const [students, setStudents] = useState(props.elements);
	function onAddStudent(event) {
		event.preventDefault();
		const stud: StudentProps = {
			name: document.querySelector<HTMLInputElement>("#studentName")!.value,
		};
		console.log(stud);
		setStudents(
			students => [...students, stud]
		);
	}
	return (
		<>
			<section className="studentGrid">
				{students.map((student) => (
					<Student name={student.name} />
				))}
			</section>
			<StudentCreationForm onAddStudent={onAddStudent} />
		</>
	);
}

export default Grid;
