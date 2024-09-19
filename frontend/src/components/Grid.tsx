import Student from "./Student";
import { GridProps } from "./types";
function Grid(props: GridProps) {
	return (
		<section className="studentGrid">
			{props.elements.map((student) => (
				<Student name={student.name} />
			))}
		</section>
	);
}

export default Grid;
