type StudentProps = {
	name: string;
};
function Student(props: StudentProps) {
	return (
		<>
			<h2>{props.name}</h2>
		</>
	);
}

export default Student;
