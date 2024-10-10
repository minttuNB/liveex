import { PropsWithChildren } from "react";
import Student from "./Student";
import { GridProps, StudentProps } from "./types";
function Grid(props: Readonly<PropsWithChildren<GridProps>>) {
	return (
		<>
			{props.children}
			<section className="grid">
				{props.elements.map((student: StudentProps) => (
					<Student
						key={student.id}
						name={student.name}
						id={student.id}
						onRemoveStudent={props.onRemoveStudent}
					/>
				))}
			</section>
		</>
	);
}

export default Grid;
