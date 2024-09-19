import Avatar from "./Avatar";
import { StudentProps } from "./types";

function Student(props: StudentProps) {
	return (
		<article className="student">
			<Avatar name={props.name}/>
			<h2>{props.name}</h2>
		</article>
	);
}

export default Student;
