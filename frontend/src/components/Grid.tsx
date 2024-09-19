import Student from "./Student";
import { GridProps, StudentProps } from "./types";
function Grid(props: GridProps) {
	return (
		<>
			<section className="studentGrid">
				{props.elements.map((student: StudentProps) => (
					<Student key={student.id} name={student.name} id={student.id} />
				))}
			</section>
		</>
	);
}

export default Grid;
