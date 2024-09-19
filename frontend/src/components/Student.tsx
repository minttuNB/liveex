import Avatar from "./Avatar";

type StudentProps = {
	name: string;
};
function Student(props: StudentProps) {
	return (
		<>
			<Avatar name={props.name}/>
			<h2>{props.name}</h2>
		</>
	);
}

export default Student;
