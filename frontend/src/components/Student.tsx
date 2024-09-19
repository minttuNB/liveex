import Avatar from "./Avatar";
import { StudentProps } from "./types";

function Student(props: StudentProps) {
	return (
		<>
			<Avatar name={props.name}/>
			<h2>{props.name}</h2>
		</>
	);
}

export default Student;
